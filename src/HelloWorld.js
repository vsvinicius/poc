import { useFlags } from "launchdarkly-react-client-sdk";

// Pass the flags prop and return an element based on the state of the feature flag key
const HelloWorld = () => {
  const { managementPlatform, qrCode, users } = useFlags();
  return (
    <>
      <h1>Features</h1>
      {managementPlatform && <h3>Management platform</h3>}
      {qrCode && <h3>QR code</h3>}
      {users && <h3>User Management</h3>}
    </>
  );
};

export default HelloWorld;
