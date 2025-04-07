import React from 'react';
import { View, Text, Image } from 'react-native';

const OrderItem = () => {
    return (
        <View style={{
            borderWidth: 1, borderColor: '#E5E5E5', borderRadius: 10, padding: 10, margin: 10,
            backgroundColor: 'white', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3
        }}>
            {/* Ngày tháng */}
            <Text style={{ fontSize: 14, color: '#757575' }}>Thứ tư, 03/09/2021</Text>

            {/* Nội dung đơn hàng */}
            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                {/* Ảnh sản phẩm */}
                <Image
                    source={require('../../img/caytrong.png')}
                    style={{ width: 60, height: 60, borderRadius: 5 }}
                />
                
                {/* Thông tin sản phẩm */}
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={{ fontSize: 14, color: 'green', fontWeight: 'bold' }}>Đặt hàng thành công</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 3 }}>Spider Plant <Text style={{ fontSize: 14, color: '#B0B0B0' }}> | Ủa bóng</Text></Text>
                    <Text style={{ fontSize: 14, color: '#757575', marginTop: 2 }}>2 sản phẩm</Text>
                </View>
            </View>
        </View>
    );
};

export default OrderItem;