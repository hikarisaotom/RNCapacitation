import React from 'react'
import { SectionList, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin", ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin" ]
    }
];

export const SectionListScreen = () => {
  return (
    <View style={{flex:1}}>
       
        <SectionList
        sections={casas}
        keyExtractor={(item,index)=>item+index}
        ListHeaderComponent={()=><HeaderTitle title="Section List"/>}
        ListFooterComponent={()=><HeaderTitle title={"Total casas: "+casas.length}/>}
        renderSectionFooter={({section})=>(<HeaderTitle title={"Total: "+section.data.length}/>)}
        renderItem={({item})=><Text>{item}</Text>}
        stickySectionHeadersEnabled={true}
        renderSectionHeader={({section})=> (
            <View style={{backgroundColor:'white'}}>
                <HeaderTitle title={section.casa}/>
            </View>
        )}
        />
    </View>
  )
}
