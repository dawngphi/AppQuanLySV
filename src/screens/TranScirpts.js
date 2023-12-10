import { View, Text,FlatList} from 'react-native'
import React,{useState} from 'react'
import TranScirptsItem from '../components/TranScirptsItem'
import ChartTranScirpt from './ChartTranScirpt'

const TranScirpts = () => {


    const [CreditsGPA,setCreditsGPA] =useState([{
        id:0,
        GPA: '3.5',
        CreditsGPA: '3.5',
        CreditsTotal: '3.5',
        CreditsPassed: '3.5',
    }])
    const [semesterData, setsemesterData] = useState([{
        id: 0,
        Semester: 'Fall 2023',
        subjectCode: 'MOB401',
        subjectName: 'Lập trình server cho Android',
        term:'5',
        subjectCodeChange: 'MOB401',
        status: 'Passed',
        score: '9.5',
        Credits: '3',
    },
    {
        id: 1,
        Semester: 'Fall 2023',
        subjectCode: 'MOB402',
        subjectName: 'Lập trình game 2D nâng cao',
        term:'5',
        subjectCodeChange: 'MOB402',
        status: 'Passed',
        score: '7.0',
        Credits: '3',
    },{
        id: 2,
        Semester: 'Fall 2023',
        subjectCode: 'MOB403',
        subjectName: 'Lập Trình Java2',
        term:'5',
        subjectCodeChange: 'MOB403',
        status: 'Failed',
        score: '4.5',
        Credits: '3',
    },
    {
        id: 3,
        Semester: 'Fall 2023',
        subjectCode: 'MOB405',
        subjectName: 'Lập trình Game 2D',
        term:'5',
        subjectCodeChange: 'MOB405',
        status: 'Passed',
        score: '8.5',
        Credits: '3',
    },
    {
        id: 4,
        Semester: 'Summer 2023',
        subjectCode: 'MOB407',
        subjectName: 'Thiết kế Website',
        term:'5',
        subjectCodeChange: 'MOB407',
        status: 'Passed',
        score: '9.0',
        Credits: '3',
    },
    {
        id: 5,
        Semester: 'Fall 2023',
        subjectCode: 'MOB408',
        subjectName: 'Lập trình Java1',
        term:'5',
        subjectCodeChange: 'MOB408',
        status: 'Passed',
        score: '7.0',
        Credits: '3',
    },
    {
        id: 6,
        Semester: 'Fall 2023',
        subjectCode: 'MOB409',
        subjectName: 'Thiết Kế Giao Diện Android',
        term:'5',
        subjectCodeChange: 'MOB409',
        status: 'Failed',
        score: '4.0',
        Credits: '3',
    }
])


    const handlePress = (item) => {
        item.isExpanded = !item.isExpanded;
        const newData = [...semesterData];
        setsemesterData(newData);
           }

  return (
    <View  style={{ paddingTop: 16, paddingHorizontal: 12, flex: 1 }}>
          <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca',borderRadius:5,padding:16,width:'100%',height:'45%'}}>
    <View style={{flexDirection:'row'}}>
        <View style={{width:'100%'}}>
            <Text style={{color:'blue',paddingLeft:8}}>
               Điểm Trung Bình:7.5
            </Text>
            <Text style={{color:'blue',paddingLeft:8,paddingTop:6,backgroundColor:'#f2f2f2'}}>
               Tín Chỉ:72/96(Đạt Tổng) -0 miễn giảm
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
                            {/* {item.CreditsTotal}  */}5
                        </Text>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                         {/* {item.CreditsPassed} */}7
                        </Text>  
                </View>
                <View style={{ flexDirection: 'row', width: '50%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', flex: 3, textAlign: 'center' }}>
                            {/* {item.CreditsTotal} */}4
                        </Text>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                          {/* {item.CreditsPassed} */}4
                        </Text>  
                </View>
              </View>
                </View>
                </View>
        </View>
    </View> 
</View>
        <View style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', borderWidth: 1, borderColor: '#cacaca',marginTop:6,borderRadius:8}}>
                    <View style={{ flexDirection: 'row', width: '70%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', flex: 3, textAlign: 'center' }}>
                           Học Kỳ
                        </Text>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                          Môn
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '40%' }}>
                        <Text style={{ color: 'black', padding: 12, fontWeight: 'bold', textAlign: 'center', flex: 7 }}>
                           Điểm
                        </Text>
                    </View>
                </View>
                <FlatList 
                 showsVerticalScrollIndicator={false}
                 data={semesterData}
                 keyExtractor={item => item.id}
                 renderItem={({ item }) => <TranScirptsItem item={item} handlePress={handlePress} />
                    }
                />
    </View>
  )
}

export default TranScirpts