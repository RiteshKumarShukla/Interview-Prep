import React, { useState } from 'react';

const StrongPasswordChecker = () => {
    const [password, setPassword] = useState('');
    const [isStrong, setIsStrong] = useState(false);

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setIsStrong(checkPasswordStrength(newPassword));
    };

    const checkPasswordStrength = (password) => {
        // Define your password strength criteria here
        const minLength = 8;
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';

        let hasUppercase = false;
        let hasLowercase = false;
        let hasNumber = false;

        for (let i = 0; i < password.length; i++) {
            const char = password[i];
            if (uppercaseLetters.includes(char)) {
                hasUppercase = true;
            } else if (lowercaseLetters.includes(char)) {
                hasLowercase = true;
            } else if (numbers.includes(char)) {
                hasNumber = true;
            }
        }

        return password.length >= minLength && hasUppercase && hasLowercase && hasNumber;
    };

    return (
        <div>
            <input type="password" value={password} onChange={handlePasswordChange} />
            {isStrong ? (
                <p>Password is strong!</p>
            ) : (
                <p>Password is not strong. It should contain at least 8 characters, including uppercase, lowercase, and numbers.</p>
            )}
        </div>
    );
};

export default StrongPasswordChecker;
