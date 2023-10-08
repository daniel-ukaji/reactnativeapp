// WebViewComponent.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const WebViewComponent = ({ route }) => {
  const { verificationUrl } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: verificationUrl }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};

export default WebViewComponent;
