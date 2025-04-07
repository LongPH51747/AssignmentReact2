import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = ({navigation}:{navigation: any}) => {
    return (
        <View style={styles.container}>
            {/* Tiêu đề */}
            <Text style={styles.header}>PROFILE</Text>

            {/* Thông tin cá nhân */}
            <View style={styles.profileContainer}>
                <Image source={require('../img/avata.png')} style={styles.avatar} />
                <View style={styles.profileText}>
                    <Text style={styles.name}>Lê Thành Long</Text>
                    <Text style={styles.email}>longltph51747@gmail.com</Text>
                </View>
            </View>

            {/* Danh mục */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Chung</Text>
                <TouchableOpacity style={styles.item} onPress={()=>{navigation.navigate('EditProfileScreen')}}>
                    <Text style={styles.itemText}>Chỉnh sửa thông tin</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Cẩm nang trồng cây</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Lịch sử giao dịch</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Q & A</Text>
                </TouchableOpacity>
            </View>

            {/* Bảo mật và Điều khoản */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Bảo mật và Điều khoản</Text>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Điều khoản và điều kiện</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.itemText}>Chính sách quyền riêng tư</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={()=>{navigation.navigate('Login')}}>
                    <Text style={[styles.itemText, { color: 'red' }]}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    profileText: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: '#757575',
    },
    section: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#757575',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 5,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    itemText: {
        fontSize: 16,
        marginLeft: 10,
    },
});

export default Profile;