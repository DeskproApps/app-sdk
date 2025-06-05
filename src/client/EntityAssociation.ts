import type Client from "@/client/Client.ts";

export default class EntityAssociation {
  constructor(
    private client: Client,
    private name: string,
    private entityId: string,
  ) {}

  async get<T>(key: string): Promise<T | null> {
    const value = await this.client.entityAssociationGet(
      this.entityId,
      this.name,
      key,
    );
    return value ? JSON.parse(value) : null;
  }

  list(): Promise<string[]> {
    return this.client.entityAssociationList(this.entityId, this.name);
  }

  set<T>(key: string, value?: T): Promise<boolean> {
    return this.client.entityAssociationSet(
      this.entityId,
      this.name,
      key,
      value ? JSON.stringify(value) : undefined,
    );
  }

  delete(key: string): Promise<boolean> {
    return this.client.entityAssociationDelete(this.entityId, this.name, key);
  }

  count(): Promise<number> {
    return this.client.entityAssociationCountEntities(this.entityId, this.name);
  }
}
