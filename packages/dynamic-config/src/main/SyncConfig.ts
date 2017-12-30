import {
  DynamicConfig,
} from './DynamicConfig'

import {
  CONFIG_PATH,
} from './constants'

import * as utils from './utils'

import {
  IConfigOptions,
} from './types'

export class SyncConfig<ConfigType = any> {
  public static async getSyncConfig<T>({
    configPath = process.env[CONFIG_PATH],
    configEnv = process.env.NODE_ENV,
    remoteOptions = {},
  }: IConfigOptions = {}): Promise<SyncConfig<T>> {
    const dynamicConifg = new DynamicConfig({ configPath, configEnv, remoteOptions })
    const resolvedConfig: T = await dynamicConifg.get()
    return new SyncConfig<T>(resolvedConfig, dynamicConifg)
  }

  private resolvedConfig: ConfigType
  private dynamicConfig: DynamicConfig

  constructor(config: ConfigType, dynamicConfig: DynamicConfig<ConfigType>) {
    this.resolvedConfig = config
    this.dynamicConfig = dynamicConfig
  }

  public get<T = any>(key: string = ''): T | null {
    // If the key is not set we return the entire structure
    if (key === '') {
      return (this.resolvedConfig as any)

    // If the key is set we try to find it in the structure
    } else {
      const value: T | null = utils.getValueForKey<T>(key, this.resolvedConfig)
      if (value !== null) {
        return value
      } else {
        console.error(`Value for key '${key}' not found in config`)
        return null
      }
    }
  }

  public async getSecretValue<T = any>(vaultKey: string): Promise<T> {
    return this.dynamicConfig.getSecretValue<T>(vaultKey)
  }
}