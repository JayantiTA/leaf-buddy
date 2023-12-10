import React from "react";
import { Text, Alert, VStack, HStack, IconButton, CloseIcon } from "native-base";

export default function ToastAlert({ title, hideToast }) {
  return (
    <Alert maxWidth="90%" alignSelf="center" flexDirection="row" status="error" variant="solid" position="absolute" zIndex={1} bottom={2}>
      <VStack space={1} flexShrink={1} w="100%">
        <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
          <HStack space={2} flexShrink={1} alignItems="center">
            <Alert.Icon />
            <Text fontSize="sm" fontWeight="medium" flexShrink={1} color="lightText">
              {title}
            </Text>
          </HStack>
          <IconButton variant="unstyled" icon={<CloseIcon size="3" />} _icon={{
            color: "lightText"
          }} onPress={() => hideToast()} />
        </HStack>
      </VStack>
    </Alert>
  );
}
