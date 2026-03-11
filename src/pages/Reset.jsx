import React, { useState } from "react";
import axios from "axios";

function Reset() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [otpType, setOtpType] = useState("login"); // <-- must match OTP request type

  const resetPassword = async () => {
    // Input validation
    if (!email) {
      alert("Email is required");
      return;
    }
    if (!/^\d{6}$/.test(otp)) {
      alert("OTP must be 6 digits");
      return;
    }
    if (!newPassword) {
      alert("New password is required");
      return;
    }

    try {
      // Step 1: Verify OTP
      const verifyRes = await axios.post(
        "https://auth-backend.kirittech.com/api/auth/verify-otp",
        {
          email,
          otp,        // backend expects this exact field
          type: otpType // must exactly match the OTP request type
        }
      );

      if (!verifyRes.data.status) {
        alert(
          "OTP not verified or expired. Request a new OTP."
        );
        return;
      }

      // Step 2: Reset password
      const resetRes = await axios.post(
        "https://auth-backend.kirittech.com/api/auth/reset-password",
        {
          email,
          otp,
          password: newPassword,
          password_confirmation: newPassword
        }
      );

      if (resetRes.data.status) {
        alert("Password reset successful!");
        setEmail("");
        setOtp("");
        setNewPassword("");
      } else {
        alert("Failed: " + (resetRes.data.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err.response?.data);
      alert("Error: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h3>Reset Password</h3>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="OTP (6 digits)"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="form-control mb-2"
        maxLength={6}
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        className="form-control mb-2"
      />

      <button onClick={resetPassword} className="btn btn-danger w-100">
        Reset Password
      </button>
    </div>
  );
}

export default Reset;