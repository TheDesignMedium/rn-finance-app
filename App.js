import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  FlatList
} from 'react-native';

// Install These Packages
import SlidingUpPanel from 'rn-sliding-up-panel'
import Carousel from 'react-native-snap-carousel'

// From Expo
import {MaterialIcons} from '@expo/vector-icons'

const Home = () => {

  // Users Data

  const Users = [
    {
      key: '1',
      userImage: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Jessica',
      transactionDate: '25 April 20',
      amount: '$350',
      credit: true
    },
    {
      key: '2',
      userImage: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Micela',
      transactionDate: '16 April 20',
      amount: '$150',
      credit: false
    },
    {
      key: '3',
      userImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Gabriel',
      transactionDate: '05 April 20',
      amount: '$364',
      credit: false
    },
    {
      key: '4',
      userImage: 'https://images.pexels.com/photos/1082962/pexels-photo-1082962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Jasmine',
      transactionDate: '28 March 20',
      amount: '$100',
      credit: true
    },
    {
      key: '5',
      userImage: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Alex',
      transactionDate: '14 March 20',
      amount: '$450',
      credit: true
    },
    {
      key: '6',
      userImage: 'https://images.pexels.com/photos/1548164/pexels-photo-1548164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'Mark',
      transactionDate: '05 March 20',
      amount: '$288',
      credit: true
    },
    {
      key: '7',
      userImage: 'https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      userName: 'Daria',
      transactionDate: '03 March 20',
      amount: '$350',
      credit: false
    },
    {
      key: '8',
      userImage: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      userName: 'George',
      transactionDate: '01 March 20',
      amount: '$350',
      credit: true
    },
  ]

  // Carousel data

  const Images= [
    {
      image: require('./assets/card2.png'),
    },
    {
      image: require('./assets/card1.png'),
    },
    {
      image: require('./assets/card3.png'),
    },
    {
      image: require('./assets/card4.png'),
    },
  ];

  const {width,height} = Dimensions.get('window')
  const carouselRef = useRef(null)

  const RenderItem = ({item}) => {
    return(
      <TouchableWithoutFeedback>
        <Image source={item.image} style={{width: 360, height: 240, borderRadius: 10}} />
      </TouchableWithoutFeedback>
    )
  }




  // SLIDING PANEL

  const [dragRange,setDragRange] = useState({
    top:height - 80,
    bottom: 160
  })

  const _draggedValue = new Animated.Value(180);

  const ModalRef = useRef(null);


  return (

    <View style={styles.container}>
        <View style={{paddingTop: 50,paddingHorizontal:14}}>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
              <Text style={{fontSize:26,color: '#fff'}}>Welcome Back,</Text>
              <Text style={{fontSize:26,color: '#fff', opacity: 0.6}}>James Murray</Text>
            </View>
            <View>
              <Image
               source={{uri: 'https://images.pexels.com/photos/936229/pexels-photo-936229.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' }}
              style={styles.ProfileImage}
              />
              <View style={styles.ProfileImageNotification}></View>
            </View>
          </View>

          <View>
            <Carousel 
            layout={"tinder"}
            ref={carouselRef}
            data={Images}
            renderItem={RenderItem}
            sliderWidth={width}
            itemWidth={width - 10}
            swipeThreshold={100}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.4}
            containerCustomStyle={{
              overflow: 'visible',
              marginVertical: 30
            }}
            contentContainerCustomStyle={{
              paddingTop: 14
            }}
            />
          </View>

          <View>
            <Text style={{color: '#fff',opacity: 0.6,marginBottom: 10}}>Send Money</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.AddUser}>
                  <View style={styles.AddUserIconbg}>
                  <MaterialIcons name='add' color='white' size={28} style={{alignSelf: 'center'}} />
                  </View>
                  <Text style={{color: '#fff'}}>Add Users</Text>
              </TouchableOpacity>
              <FlatList 
              inverted
              horizontal
              data={Users}
              renderItem={({item}) => {
                return(
                  <View style={styles.AddUser}>
                      <Image style={styles.AddUserIconbg} source={{uri : item.userImage}} />
                      <Text style={{color: '#fff'}}>{item.userName}</Text>
                  </View>
                )
              }}
              />
            </View>
          </View>
        </View>

        <View style={{flex: 1}}>
            <SlidingUpPanel 
            ref={ModalRef}
            draggableRange={dragRange}
            animatedValue={_draggedValue}
            backdropOpacity={0}
            snappingPoints={[360]}
            height={height + 20}
            friction={0.9}
            >

            <View style={{flex: 1, backgroundColor: '#0c0c0c', borderRadius: 24, padding: 14}}>
              <View style={styles.PanelHandle}></View>
              <View>
                <Text style={{marginVertical: 16, color: '#fff'}}>Recent Transactions</Text>
              </View>

              <View style={{height: 500, paddingBottom: 10}}>
                <FlatList 
                data={Users}
                keyExtractor={item => item.key}
                renderItem={({item}) => {
                  return(
                    <View style={styles.PanelItemContainer}>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                          <View style={{marginRight: 10}}>
                            <Image source={{uri: item.userImage}} style={styles.PanelImage}  />
                          </View>
                          <View>
                            <Text style={{fontSize: 14, color: '#fff'}}>{item.userName}</Text>
                            <Text style={{fontSize: 10, color: '#fff', opacity: 0.6}}>{item.transactionDate}</Text>
                          </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Text style={{fontSize: 16, color: '#fff', marginHorizontal: 2}}>{item.amount}</Text>

                          {item.credit ? (
                            <MaterialIcons name='arrow-drop-up' size={22} color='green' />
                          ) : (
                            <MaterialIcons name='arrow-drop-down' size={22} color='#ff3838' />
                          )}
                        </View>
                    </View>
                  )
                }}
                />
              </View>
              <View style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                <TouchableOpacity style={styles.PanelButton}>
                  <Text style={styles.PanelButtonText}>View Full History</Text>
                </TouchableOpacity>
              </View>

            </View>
            </SlidingUpPanel>
        </View>

    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 0
  },
  ProfileImage: {
    width: 55,
    height: 55,
    borderRadius: 40
  },
  ProfileImageNotification: {
    height: 12,
    width: 12,
    backgroundColor: '#4853ef',
    borderRadius: 6,
    position: 'absolute',
    right: 6,
    borderWidth: 2,
    borderColor: '#000'
  },
  AddUser: {
    height: 140,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0c0c0c',
    borderRadius: 10,
    marginRight: 14
  },
  AddUserIconbg: {
    width: 70,
    height: 70,
    backgroundColor: '#000',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center'
  },
  PanelHandle: {
    height: 6,
    width: 50,
    backgroundColor: '#666',
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6
  },
  PanelItemContainer: {
    borderWidth: 0.4,
    borderColor: '#666',
    padding: 14,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  PanelImage: {
    width: 30,
    height: 30,
    backgroundColor: '#000',
    borderRadius: 40
  },
  PanelButton: {
    padding:14,
    width: 200,
    justifyContent: 'center',
    backgroundColor: '#1c1c1c',
    borderRadius: 10
  },
  PanelButtonText: {
    fontSize: 16,
    color: '#fff',
    alignSelf: 'center'
  }
});

export default Home;