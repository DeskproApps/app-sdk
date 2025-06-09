// deno-lint-ignore-file no-explicit-any

/**
 * Settings class to manage application settings.
 *
 * @link https://support.deskpro.com/en-GB/guides/developers/app-settings
 */
export default class Settings {
  constructor(
    private methods: {
      setSetting: <T>(name: string, value: T) => Promise<void>;
      setSettings: (settings: Record<string, any>) => Promise<void>;
      setAdminSetting: (value: string) => void;
      setAdminSettingInvalid: (
        message: string,
        settingName?: string,
      ) => void;
    },
  ) {}

  public setSetting<T>(name: string, value: T): Promise<void> {
    return this.methods.setSetting<T>(name, value);
  }
  public setSettings(settings: Record<string, any>): Promise<void> {
    return this.methods.setSettings(settings);
  }
  public setAdminSetting(value: string): void {
    return this.methods.setAdminSetting(value);
  }
  public setAdminSettingInvalid(
    message: string,
    settingName?: string,
  ): void {
    return this.methods.setAdminSettingInvalid(message, settingName);
  }
}
