import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContex } from '../context/AuthContext';

interface Props{
    name:string
}
export const TouchableIcon = ({name}:Props) => {
    const {changeIcon} = useContext(AuthContex)
  return (
    <TouchableOpacity 
    onPress={()=>changeIcon(name)}>
       <Icon name={name} size={30} color="#4F8EF7" />
    </TouchableOpacity>
  )
}
