import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite'
import * as Linking from 'expo-linking'
import { openAuthSessionAsync } from 'expo-web-browser'

export const config = {
  platform: 'com.paku.auranativa',
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client()
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!)

export const avatar = new Avatars(client)
export const account = new Account(client)

export async function login() {
  try {
    const redirectUri = Linking.createURL('/')
    const res = account.createOAuth2Token(OAuthProvider.Google, redirectUri)
    if (!res) throw new Error('Failed to login')

    const browserResult = await openAuthSessionAsync(
      res.toString(),
      redirectUri
    )

    if (browserResult.type !== 'success')
      throw new Error('browserResult went wrong')

    const url = new URL(browserResult.url)
    const secret = url.searchParams.get('secret')?.toString()
    const userId = url.searchParams.get('userId')?.toString()

    if (!secret || !userId) throw new Error('Cannot get secret or userId')
    const session = await account.createSession(userId, secret)
    if (!session) throw new Error('Cannot create session')
  } catch (error) {
    console.error(error)
    return false
  }
}

export async function logout() {
  try {
    await account.deleteSession('current')
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

export async function getCurrentUser() {
  try {
    const res = await account.get()
    if (res.$id) {
      const userAvatar = avatar.getInitials(res.name)
      return {
        ...res,
        avatar: userAvatar.toString(),
      }
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
