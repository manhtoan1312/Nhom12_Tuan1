import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nhóm 12</Text>
      <Text>Nguyễn Mạnh Toàn</Text>
      <Text>20110578</Text>
      <Text>-----</Text>
      <Text>Nguyễn Hoàng Kha</Text>
      <Text>20110500</Text>
      <Text>-----</Text>
      <Text>Trần Thị Phương Linh</Text>
      <Text>20110126</Text>
    </View>
  );
};

export default ProfileScreen;
