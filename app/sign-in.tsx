import { Image, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { login } from '@/libs/appwrite'

export default function SignIn() {
  async function handleLogin() {
    try {
      const res = await login()
      if (res) console.log('logged in')
    } catch (error) {
      console.log('Error al iniciar sesión', error)
    }
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image
          source={images.onboarding}
          className='w-full h-4/6'
          resizeMode='contain'
        />
        <View className='px-10'>
          <Text className='text-base text-center uppercase text-black-200'>
            Bienvenidx a AuraNativa
          </Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
            Encontremos juntos{'\n'}
            <Text className='text-primary-500'>Tu hogar ideal </Text>
          </Text>
          <Text className='text-lg text-black-200 text-center mt-12'>
            Ingresa con Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className='bg-white shadow-md w-full shadow-zinc-300 h-20 gap-2 flex flex-row items-center justify-center rounded-full  py-2 mt-5'
          >
            <Image
              source={icons.google}
              className='h-5  w-5'
              resizeMode='contain'
            ></Image>
            <Text className='text-lg font-rubil-medium text-black-300 '>
              Ingresar con google
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Text>Sign In</Text>
    </SafeAreaView>
  )
}
