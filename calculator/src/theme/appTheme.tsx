import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom:10
  },
  tinyResult:{
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  btn:{
    //  width:80,
      height:80,
   //   backgroundColor:"#9b9b9b",
      borderRadius:100,
      justifyContent:'center',
      marginHorizontal:10
  },
  btnText:{
    textAlign:'center',
    padding:10,
    fontSize:30,
    color:'black',
    fontWeight:'300'
  },
  row:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:18,
    paddingHorizontal:10
  }
});
