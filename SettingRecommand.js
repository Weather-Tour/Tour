import React, { useState, useEffect, useRef } from 'react';

import { StyleSheet, Text, View, Dimensions, ScrollView, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Entypo } from '@expo/vector-icons';
import Tour from './Data/Tour.json';
import sungsan from './Data/sungsan.json';
import gooza from './Data/gooza.json';

const SCREEN_WDITH = Dimensions.get('window');

function SettingRecommand({ Area, func}) {
    console.log('Rendering');

   
 

    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [jeju, setJeju] = useState([]);



    const citiesDropdownRef = useRef();
    useEffect(() => {
        setCountries([
            {
                title: '제주시',
                cities: [
                    {
                        title: '한림읍'
                    }, {
                        title: '애월읍'
                    }, {
                        title: '구좌읍'
                    }, {
                        title: '조천읍'
                    }, {
                        title: '한경면'
                    }, {
                        title: '추자면'
                    }, {
                        title: '우도면'
                    }, {
                        title: '일도1동'
                    }, {
                        title: '일도2동'
                    }, {
                        title: '이도1동'
                    }, {
                        title: '이도2동'
                    }, {
                        title: '삼도1동'
                    }, {
                        title: '삼도2동'
                    }, {
                        title: '용담1동'
                    }, {
                        title: '용담2동'
                    }, {
                        title: '건입동'
                    }, {
                        title: '화북동'
                    }, {
                        title: '삼양동'
                    }, {
                        title: '봉개동'
                    }, {
                        title: '아라동'
                    }, {
                        title: '오라동'
                    }, {
                        title: '연동'
                    }, {
                        title: '노형동'
                    }, {
                        title: '외도동'
                    }, {
                        title: '이호동'
                    }, {
                        title: '도두동'
                    }
                ]
            }, {
                title: '서귀포시',
                cities: [
                    {
                        title: '대정읍'
                    }, {
                        title: '남원읍'
                    }, {
                        title: '성산읍'
                    }, {
                        title: '안덕면'
                    }, {
                        title: '표선면'
                    }, {
                        title: '송산동'
                    }, {
                        title: '정방동'
                    }, {
                        title: '중앙동'
                    }, {
                        title: '천지동'
                    }, {
                        title: '효돈동'
                    }, {
                        title: '영천동'
                    }, {
                        title: '동홍동'
                    }, {
                        title: '서홍동'
                    }, {
                        title: '대륜동'
                    }, {
                        title: '대천동'
                    }, {
                        title: '중문동'
                    }, {
                        title: '예래동'
                    }
                ]
            }
        ]);
        setJeju([
            {
                title: '제주도'
            }
        ]);
        

    }, []);


    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.textStyle}>지역 설정</Text>
            </View>
            <View style={styles.dropdownsRow}>
                <SelectDropdown 
                    style={styles.select}
                    data={jeju}
                    onSelect={(selectedItem, index) => {
                        citiesDropdownRef
                            .current
                            .reset();
                    }}
                    defaultButtonText={Area['region']} //defaultText ( 제주도 )
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.title;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.title;
                    }}
                    buttonStyle={styles.dropdownBtnStyle}
                    buttonTextStyle={styles.txtStyle}
                    renderDropdownIcon={isOpened => {
                        return <Entypo name={isOpened ? 'triangle-up' : 'triangle-down'} color={'#444'} size={18} />;
                    }}
                    dropdownStyle={styles.dropdownDropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.txtStyle} />

                <View style={styles.select} />

                <SelectDropdown 

                    data={countries}
                    onSelect={(selectedItem, index) => {
                        citiesDropdownRef
                            .current
                            .reset();
                        setCities([]);
                        setCities(selectedItem.cities);
                    }}
                    defaultButtonText={Area['city']} //defaultText  ( 제주시 / 서귀포시 )
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.title;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.title;
                    }}
                    buttonStyle={styles.dropdownBtnStyle}
                    buttonTextStyle={styles.txtStyle}
                    renderDropdownIcon={isOpened => {
                        return <Entypo name={isOpened ? 'triangle-up' : 'triangle-down'} color={'#444'} size={18} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdownDropdownStyle}
                    rowStyle={styles.dropdown1RowStyle}
                    rowTextStyle={styles.txtStyle} />
                <View style={styles.select} />
                <SelectDropdown

                    ref={citiesDropdownRef}
                    data={cities}
                    onSelect={(selectedItem, index) => { func(selectedItem);}}
                    defaultButtonText={Area['district']} //defaultText 제주시/서귀포시  에 따라 나오는 동이 바뀜
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem.title;
                    }}
                    rowTextForSelection={(item, index) => {
                        return item.title;
                    }}
                    buttonStyle={styles.dropdownBtnStyle}
                    buttonTextStyle={styles.txtStyle}
                    renderDropdownIcon={isOpened => {
                        return <Entypo name={isOpened ? 'triangle-up' : 'triangle-down'} color={'#444'} size={18} />
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdownDropdownStyle}
                    rowTextStyle={styles.txtStyle} />
            </View>
           {/* 관광지 정보 출력 */}
            <ScrollView style={styles.TourInfor}
                horizontal={true}>
                <View style={styles.TourIcon}>
                    <Image style={styles.TourImage}
                        source={require('./img/tour/구좌읍/한울랜드.jpg')} />
                    <Text style={styles.TourText}>섭지코지</Text>
                </View>
                <View style={styles.TourIcon}>
                    <Image style={styles.TourImage}
                        source={require('./img/cat.png')} />
                    <Text style={styles.TourText}>성산일출봉</Text>
                </View>
                <View style={styles.TourIcon}>
                    <Image style={styles.TourImage}
                        source={require('./img/tour/구좌읍/한울랜드.jpg')} />
                    <Text style={styles.TourText}>혼인지</Text>
                </View>
                <View style={styles.TourIcon}>
                    <Image style={styles.TourImage}
                        source={require('./img/cat.png')} />
                </View>
                <View style={styles.TourIcon}>
                    <Image style={styles.TourImage}
                        source={require('./img/cat.png')} />
                </View>
                <View style={styles.TourIcon}>
                    <Image style={styles.TourImage}
                        source={require('./img/cat.png')} />
                </View>

            </ScrollView>
           {/* end of 관광지 정보 출력 */}
        </View>

    );

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'colum',
        width: '100%',
        backgroundColor: '#fff',
        paddingTop: 30,
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },


    dropdownsRow: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 0,
        backgroundColor: 'white'
    },

    dropdownBtnStyle: {
        flex: 1,
        height: 35,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
    },
    txtStyle: {
        color: '#444',
        textAlign: 'center'
    },
    dropdownDropdownStyle: {
        backgroundColor: '#EFEFEF',
        marginTop: -40
    },

    chevronView: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textBox: {
        width: '100%',
        height: '10%',
        marginLeft: 20,
        marginBottom: 15
    },

    textStyle: {
        fontSize: 18,
        color: '#444',
        fontWeight: 'bold'
    },

    TourInfor: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 50,

    },

    TourIcon: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        marginLeft: 10,
        marginRight: 10,

    },

    TourImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },

    TourText: {
        marginTop: 13,
        fontSize: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
export default SettingRecommand;