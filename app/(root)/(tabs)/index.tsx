import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Index() {
  return (
    <View
      className='gap-10 flex items-center
justify-center h-full '
    >
      <Text className='font-bold text-4xl  text-center   font-rubik'>
        Welcome to realState
      </Text>
      <Link className='text-xl bg-red-200 text-center' href={'/sign-in'}>
        Sign In
      </Link>
      <Link className='text-xl text-center' href={'/explore'}>
        Explore
      </Link>
      <Link className='text-xl text-center' href={'/profile'}>
        Profile
      </Link>
      <Link className='text-xl text-center' href={'/properties/1'}>
        Property
      </Link>
    </View>
  )
}
