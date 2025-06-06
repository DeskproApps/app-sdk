// deno-lint-ignore-file no-explicit-any
import {
  assertSpyCall,
  spy,
} from "@std/testing/mock";
import Settings from "@/client/Settings.ts";

Deno.test("Settings.setSetting calls underlying method with correct parameters", async () => {
  const mockMethods = {
    setSetting: spy(() => Promise.resolve()),
  };
  const settings = new Settings(mockMethods as any);
  const testValue = { key: "value" };

  await settings.setSetting("test-setting", testValue);

  assertSpyCall(mockMethods.setSetting, 0, {
    args: ["test-setting", testValue],
  });
});

Deno.test("Settings.setSettings calls underlying method with correct settings object", async () => {
  const mockMethods = {
    setSettings: spy(() => Promise.resolve()),
  };
  const settings = new Settings(mockMethods as any);
  const testSettings = { setting1: "value1", setting2: 42 };

  await settings.setSettings(testSettings);

  assertSpyCall(mockMethods.setSettings, 0, {
    args: [testSettings],
  });
});

Deno.test("Settings.setAdminSetting calls underlying method with correct value", () => {
  const mockMethods = {
    setAdminSetting: spy(() => {}),
  };
  const settings = new Settings(mockMethods as any);
  const testValue = "admin-config";

  settings.setAdminSetting(testValue);

  assertSpyCall(mockMethods.setAdminSetting, 0, {
    args: [testValue],
  });
});

Deno.test("Settings.setAdminSettingInvalid calls underlying method with message only", () => {
  const mockMethods = {
    setAdminSettingInvalid: spy(() => {}),
  };
  const settings = new Settings(mockMethods as any);
  const errorMessage = "Invalid configuration";

  settings.setAdminSettingInvalid(errorMessage);

  assertSpyCall(mockMethods.setAdminSettingInvalid, 0, {
    args: [errorMessage, undefined],
  });
});

Deno.test("Settings.setAdminSettingInvalid calls underlying method with message and setting name", () => {
  const mockMethods = {
    setAdminSettingInvalid: spy(() => {}),
  };
  const settings = new Settings(mockMethods as any);
  const errorMessage = "Invalid value";
  const settingName = "timeout";

  settings.setAdminSettingInvalid(errorMessage, settingName);

  assertSpyCall(mockMethods.setAdminSettingInvalid, 0, {
    args: [errorMessage, settingName],
  });
});
