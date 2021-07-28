import AsyncStorage from '@react-native-async-storage/async-storage'

export class TokenHelper {
  static setToken = async (token: string) => {
    await AsyncStorage.setItem('token', token);
  }
  
  static getToken = async () => {
    return await AsyncStorage.getItem('token')
  }

  static removeToken = async () => {
    await AsyncStorage.removeItem('token')
  }
}