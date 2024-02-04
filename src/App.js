import { useGoogleLogin } from "@react-oauth/google";

const App = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);

      const userInfoEndpoint = "https://www.googleapis.com/oauth2/v3/userinfo";
      const userInfoResponse = await fetch(userInfoEndpoint, {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      });

      if (userInfoResponse.ok) {
        const userInfo = await userInfoResponse.json();
        console.log(userInfo);
      } else {
        console.error("Failed to fetch user information");
      }
    },
  });
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="google-auth">
          <button
            onClick={() => {
              googleLogin();
            }}
            className="border border-gray-300 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-full w-full mb-4 flex items-center justify-center"
          >
            <span className="mr-2">
              <img
                src="https://in.bmscdn.com/webin/common/icons/googlelogo.svg"
                alt="Google Logo"
                className="w-6 h-6"
              />
            </span>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
