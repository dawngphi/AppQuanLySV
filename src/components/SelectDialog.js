import React from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const SelectDialog = ({ visible, data, onSelect, onCancel }) => {
    const handleSelect = (item) => {
        onSelect(item);
    };
   
    return (
        <Modal onpew visible={visible} transparent animationType="fade">
            <View style={styles.modalContainer}>
                <View style={styles.dialogContainer}>
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => onSelect(item)}>
                                <Text style={styles.itemText}>{item.label}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity onPress={onCancel}>
                        <Text style={styles.cancelText}>Hủy</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    dialogContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 32,
        width: '80%',
    },
    itemText: {
        fontSize: 14,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
        color: 'black',
        textAlign: 'center',
        marginHorizontal: 24
    },
    cancelText: {
        fontSize: 16,
        color: 'red',
        paddingVertical: 8,
        textAlign: 'center',
        marginTop: 16,
    },
});

export default SelectDialog;

// const [isDialogVisible, setDialogVisible] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const data = [
//     { id: 0, label: '7 ngày tới' },
//     { id: 1, label: '30 ngày tới' },
//     { id: 2, label: '90 ngày tới' },
//     { id: 3, label: '7 ngày trước' },
//     { id: 4, label: '30 ngày trước' },
//     { id: 5, label: '90 ngày trước' },
//   ];

//   const handleSelect = (item) => {
//     setSelectedItem(item);
//     setDialogVisible(false);
//   };

//   const handleCancel = () => {
//     setDialogVisible(false);
//   };
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={() => setDialogVisible(true)} style={styles.button}>
//         <Text style={styles.buttonText}>Open Dialog</Text>
//       </TouchableOpacity>
//       <Text style={styles.selectedItemText}>Selected Item: {selectedItem ? selectedItem.label : 'None'}</Text>

//       <SelectDialog
//         visible={isDialogVisible}
//         data={data}
//         onSelect={handleSelect}
//         onCancel={handleCancel}
//       />
//     </View>
//   );