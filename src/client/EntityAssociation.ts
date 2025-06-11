/**
 * Proxy requests through the Deskpro instance.
 *
 * @link https://support.deskpro.com/en-GB/guides/developers/entity-associations
 */
export default class EntityAssociation {
  constructor(
    private methods: {
      set: (
        entityId: string,
        name: string,
        key: string,
        value?: string,
      ) => Promise<boolean>;
      delete: (
        entityId: string,
        name: string,
        key: string,
      ) => Promise<boolean>;
      get: (
        entityId: string,
        name: string,
        key: string,
      ) => Promise<string | null>;
      list: (
        entityId: string,
        name: string,
      ) => Promise<string[]>;
      count: (
        name: string,
        key: string,
      ) => Promise<number>;
    },
    private name: string,
    private entityId: string,
  ) {}

  async get<T>(key: string): Promise<T | null> {
    const value = await this.methods.get(
      this.entityId,
      this.name,
      key,
    );
    return value ? JSON.parse(value) : null;
  }

  list(): Promise<string[]> {
    return this.methods.list(this.entityId, this.name);
  }

  set<T>(key: string, value?: T): Promise<boolean> {
    return this.methods.set(
      this.entityId,
      this.name,
      key,
      value ? JSON.stringify(value) : undefined,
    );
  }

  delete(key: string): Promise<boolean> {
    return this.methods.delete(this.entityId, this.name, key);
  }

  count(): Promise<number> {
    return this.methods.count(
      this.entityId,
      this.name,
    );
  }
}
