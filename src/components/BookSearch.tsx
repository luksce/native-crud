import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type BookSearchProps = {
  getBooks: Function;
};

const BookSearch: React.FC<BookSearchProps> = ({ getBooks }: BookSearchProps) => {
  const [query, setQuery] = React.useState('');

  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Library</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder='Digite algo ...'
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity onPress={() => getBooks(query)} disabled={query === ''} accessibilityLabel="Procurar por Livros">
          <View style={styles.button}>
            <Icon name="search" color='#fff' size={16} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    padding: 6,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    width: 310,
    height: 36,
    backgroundColor: '#FFF',
    color: '#222',
    padding: 6,
    fontSize: 14,
    borderRadius: 6,
    borderWidth: 0.8,
    borderColor: '#75b5fd',
    textAlign: 'left',
  },
  button: {
    width: 36,
    height: 36,
    backgroundColor: '#75b5fd',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BookSearch;