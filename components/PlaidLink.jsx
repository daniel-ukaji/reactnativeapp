import React from 'react';
import { View, Text } from 'react-native';
import PlaidLink from 'react-native-plaid-link-sdk';

function YourComponent() {
  const handleSuccess = (success) => {
    // Handle the success event here
    console.log('Plaid Link success:', success);

    // You can access information about the linked account
    // const { metadata } = success;
    // const { institution } = metadata;

    // Perform actions with the linked account data
    // For example, you can send the public_token to your server
    // for further processing or store it in your app's state.
  };

  const handleExit = (exit) => {
    // Handle the exit event here
    console.log('Plaid Link exit:', exit);

    // if (exit.error !== null) {
    //   // Handle the case where an error occurred during the link process
    //   console.log('Plaid Link error:', exit.error);
    //   // You can display an error message to the user or take other actions.
    // } else if (exit.metadata && exit.metadata.status === 'user_exit') {
    //   console.log('User canceled the link process');
    //   // You can provide a message or perform cleanup actions.
    // } else {
    //   // Handle other exit reasons if needed
    // }
  };

  return (
    <View>
      <PlaidLink
  tokenConfig={{
    token: 'link-sandbox-826ea03e-f18d-4d7a-91b5-56281f095e2b',
  }}
  onSuccess={async response => {
    console.log(response);
  }}
  onExit={async response => {
    console.log(response);
  }}
>
  <Text>Add Account</Text>
</PlaidLink>
    </View>
  );
}

export default YourComponent;
