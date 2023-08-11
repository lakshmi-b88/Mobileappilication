import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const data = [
    {
      id: '1',
      name: 'Burger',
      image:
        'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000',
      price: '70',
    },
    {
      id: '2',
      name: 'Pizza',
      image:
        'https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg',
      price: '90',
    },
    {
      id: '3',
      name: 'Sushi',
      image: 'https://img.freepik.com/free-photo/sushi_140725-4526.jpg?w=2000',
      price: '150',
    },
    {
      id: '4',
      name: 'Vada Pav',
      image:
        'https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x375.jpg',
      price: '25',
    },
    {
      id: '5',
      name: 'Pasta',
      image:
        'https://img.freepik.com/free-photo/delicious-pasta-plate-with-tomatoes-parmesan_1339-146609.jpg?w=2000',
      price: '125',
    },
    {
      id: '6',
      name: 'Momos',
      image:
        'https://img.freepik.com/free-photo/plate-tasty-momo_1203-18584.jpg?w=2000',
      price: '60',
    },
    {
      id: '7',
      name: 'Steak',
      image:
        'https://img.freepik.com/free-photo/top-view-meat-steak-with-green-pepper-sea-salt-sauce-white-plate-wooden-board-isolated-white-background_140725-1209.jpg?w=2000',
      price: '180',
    },
    {
      id: '8',
      name: 'Ice Cream',
      image:
        'https://uploads-ssl.webflow.com/5e9ebc3fff165933f19fbdbe/61b31c9d289e22335b6753b2_Ice%20Cream%202.jpg',
      price: '30',
    },
    {
      id: '9',
      name: 'Chicken Biryani',
      image:
        'https://vismaifood.com/storage/app/uploads/public/914/f47/fa9/thumb__700_0_0_0_auto.jpg',
      price: '120',
    },
    {
      id: '10',
      name: 'Pancakes',
      image:
        'https://images-gmi-pmc.edge-generalmills.com/be4bf529-efc6-4cde-8a4f-1be8151a8fe1.jpg',
      price: '50',
    },
    {
      id: '11',
      name: 'Chicken Shawarma',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/190130-chicken-shwarma-horizontal-1549421250.png?crop=0.8893333333333334xw:1xh;center,top&resize=1200:*',
      price: '80',
    },
    {
      id: '12',
      name: 'Samosa',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/5/58/Samosa_dish.jpg',
      price: '30',
    },
    {
      id: '13',
      name: 'Fish Tacos',
      image:
        'https://static.onecms.io/wp-content/uploads/sites/43/2022/06/09/53729-fish-tacos-4x3-170-1.jpg',
      price: '95',
    },
    {
      id: '14',
      name: 'Poutine',
      image:
        'https://theforkedspoon.com/wp-content/uploads/2023/01/Poutine-2.jpg',
      price: '65',
    },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const openFoodModal = food => {
    setSelectedFood(food);
    setModalVisible(true);
  };

  const closeFoodModal = () => {
    setModalVisible(false);
  };

  const handleAddToCart = food => {
    setCartItems(prevCartItems => [...prevCartItems, food]);
    console.log(`${food.name} added to cart!`);
  };

  const handlePlaceOrder = () => {
    // Implement the order placement functionality here
    console.log('Order placed!');
    setCartItems([]); // Clear the cart after placing the order
    closeFoodModal(); // Close the modal after placing the order
  };

  const renderModal = () => {
    if (!selectedFood) return null;
    return (
      <Modal visible={modalVisible} animationType="slide">
        <ScrollView contentContainerStyle={styles.modalContainer}>
          <Image source={{uri: selectedFood.image}} style={styles.modalImage} />
          <Text style={styles.modalName}>{selectedFood.name}</Text>
          <Text style={styles.modalPrice}>Price: ${selectedFood.price}</Text>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => handleAddToCart(selectedFood)}>
            <Icon name="shopping-cart" size={24} color="#fff" />
            <Text style={styles.cartButtonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.orderButton}
            onPress={handlePlaceOrder}>
            <Text style={styles.orderButtonText}>Place Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.closeButton} onPress={closeFoodModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    );
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.foodItem}
      onPress={() => openFoodModal(item)}>
      <Image source={{uri: item.image}} style={styles.foodImage} />
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.price}>Price: ${item.price}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleAddToCart(item)}>
        <Text style={styles.buttonText}>Order</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Food App</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg?w=2000',
          }}
          style={styles.appImage}
        />
      </View>

      <Text style={styles.appDescription}>
        Welcome to the Food App! This app provides a variety of delicious food
        options for you to explore and order. Start your culinary journey with
        us!
      </Text>

      <Text style={styles.title}>Menu</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />

      {renderModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'ghostwhite',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  foodItem: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
  },
  foodImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: 'gray',
  },
  button: {
    backgroundColor: '#ff8400',
    padding: 5,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  appImage: {
    width: 200,
    height: 100,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  appDescription: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'gray',
  },
  cartButton: {
    backgroundColor: '#ff8400',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  cartButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
  orderButton: {
    backgroundColor: '#009900',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
});

export default Home;
