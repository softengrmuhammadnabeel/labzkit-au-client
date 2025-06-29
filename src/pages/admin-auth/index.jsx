import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/users";
const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const data = {
  //   username: username,
  //   password: password
  // }
  const handleLogin = () => {

    if (username === process.env.REACT_APP_USER_EMAIL && password === process.env.REACT_APP_USER_PASSWORD) {
      // const result = loginUser(data)

      localStorage.setItem("userToken", "A2m9L@*&92bjadmIuhuq88mAj8mqdna--AosdamnASMDjajd-as9mALMJAL12nalmdl23@**dns");
      localStorage.setItem("randomKey1", "https://example.com/abc123/def456?param=xyz789");
      localStorage.setItem("uuid1", "550e8400-e29b-41d4-a716-446655440000");
      localStorage.setItem("authKey", "87wq@ndja93lasK*&89ahwjn-kjsamndiOAUSDjaj9Jknald02-sandLKANSd@81ja2n9ALsmLks");
      localStorage.setItem("randomKey2", "http://weird-url.com/3knd82mAJxld0ad9Aml");
      localStorage.setItem("uuid2", "c56a4180-65aa-42ec-a945-5fd21dec0538");
      localStorage.setItem("encryptedData", "8lKASndjq9A*&nlkQjAmL*&8malkmsN2ajKldJ0aKLAS8ndajk9AosdkNAL8mknsdAKld02nak");
      localStorage.setItem("tempFileKey", "ftp://storage.server.com/file_upload/98JajsLm");
      localStorage.setItem("uuid3", "f47ac10b-58cc-4372-a567-0e02b2c3d479");
      localStorage.setItem("dummyConfig", "ws://realtime.api.com/subscribe?token=random12345");
      localStorage.setItem("randomKey3", "api-key-8ak9a8n3o9AJx8a92mla");
      localStorage.setItem("uuid4", "123e4567-e89b-12d3-a456-426614174000");
      localStorage.setItem("sessionID", "http://secure-site.org/login?session=1234xyz");
      localStorage.setItem("obfuscatedData", "ajk*&28912!jasdlkAJn#*&alk98ajsdlkmn!q0p");
      localStorage.setItem("serverCacheID", "srv-ca8c-76dc-lk98-n2jo-qalx-msdklaj92");
      localStorage.setItem("userLocale", "en-US-qw82&29JSKlnm!2#jasndklaksdqp0");
      localStorage.setItem("apiSessionToken", "api_session_ajk29*!QJasdlkAJmLk123AS*&8jas");
      localStorage.setItem("tokenExpiration", "2025-12-31T23:59:59Z");
      localStorage.setItem("clientRef", "cl_ref-LK8asd*&jlkm02QpsadlkAJsdn8x9");
      localStorage.setItem("debugFlag", "false-291ajknsdlmAJksd*&928adlkNMAjsdLK9");
      localStorage.setItem("encryptionSalt", "salt-ajl2&*923asdlmkJA!lkJnas92jasdLKJa89");
      localStorage.setItem("nonEnglishKey1", "ランダムキー-a12lkj*&mnask29JAlmnsk12&");
      localStorage.setItem("backupServer", "http://backup.node.com/storage/829ajsdlk");
      localStorage.setItem("finalizedHash", "fnl_hash_29jasdklm*&lakmLKjasd928JasLk");
      localStorage.setItem("randomKey4", "ftp://temp.server.com/backupFile12jasdl");
      localStorage.setItem("trackingPixel", "http://analytics.server.com/pixel?u=123abc");
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("uuid6", "fde123ab-456c-789d-ef01-23456789abcd");
      localStorage.setItem("uuid5", "9f1c2e12-9e07-4be4-b3e6-b74ccbcf6d87");


      navigate("/admin/products");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="rounded-lg shadow-xl p-8 w-full max-w-md border border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-md">
            <div className="h-12 w-12 rounded-full bg-[#fc8a49] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Admin Login
        </h2>
        <p className="text-center text-gray-500 mb-8">Enter your credentials to access admin panel</p>
        <div className="space-y-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fc8a49] transition duration-200"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fc8a49] transition duration-200"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full py-3 bg-[#fc8a49] text-white font-semibold rounded-lg hover:bg-[#e67c3d] transition duration-200 flex items-center justify-center"
          >
            <span>Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500 text-center mt-6">
          Only authorized users are allowed to access.
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
