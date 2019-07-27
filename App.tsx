/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import TodoListScreen from './src/screens/TodoListScreen/TodoListScreen';
import AddTodoScreen from './src/screens/AddTodoScreen/AddTodoScreen';

const DrawerNavigator = createDrawerNavigator({
  TodoList: {
    screen: TodoListScreen
  },
  AddTodo: {
    screen: AddTodoScreen
  }
});



export default createAppContainer(DrawerNavigator);