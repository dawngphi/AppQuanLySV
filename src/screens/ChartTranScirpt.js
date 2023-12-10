import { View, Text } from 'react-native'
import React from 'react'

const ChartTranScirpt = (props) => {
    const item = props.item;
    const handlePress = props.handlePress;
  return (
    <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca',borderRadius:5,padding:16,width:'100%',height:'45%'}}>
        <View style={{width:'100%'}}>
            <Text style={{color:'blue',paddingLeft:8}}>
               Điểm Trung Bình:{item.GPA}
            </Text>
            <Text style={{color:'blue',paddingLeft:8,paddingTop:6,backgroundColor:'#f2f2f2'}}>
               Tín Chỉ:{item.CreditsGPA}(Đạt Tổng) -0 miễn giảm
            </Text>
             <View style={{backgroundColor:'gray',width:'97%',height:1,}}>
            </View>
            <Text style={{color:'blue',paddingLeft:8,fontWeight: 'bold',fontSize:16}}>
                Thống Kê 
            </Text>
            
            <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca',marginTop:6}}>
            <View style={{ flexDirection: 'row', width: '25%' }}>
                <Text style={{ color: 'black',  fontWeight: 'bold', flex: 3, textAlign: 'center' }}>
                    Tổng Môn Chưa Đạt
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '25%' }}>
            <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center'}}>
                  Tổng Môn Đạt
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '25%' }}>
            <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', }}>
                  Tổng Môn Học Lại
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '25%' }}>
            <Text style={{ color: 'black' ,fontWeight: 'bold', textAlign: 'center', }}>
                  Tổng Môn Đang Học
                </Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row', borderLeftWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderColor: '#cacaca'} }>
                <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca'}}>
                <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca'}}>
                    <View style={{ flexDirection: 'row', width: '50%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', flex: 3, textAlign: 'center' }}>
                            {item.CreditsTotal}
                        </Text>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                         {item.CreditsPassed}
                        </Text>  
                </View>
                <View style={{ flexDirection: 'row', width: '50%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', flex: 3, textAlign: 'center' }}>
                            {item.CreditsTotal}
                        </Text>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                          {item.CreditsPassed}
                        </Text>  
                </View>
              </View>
                </View>
                </View>
      
    </View> 
</View>
  )
}

export default ChartTranScirpt