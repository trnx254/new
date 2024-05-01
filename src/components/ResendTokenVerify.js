const ResendTokenVerify = ({handleResend}) => {
    return (
        <div className="flex flex-col items-center">
            <p className="mb-4">User not Verified. Please Verify.</p>
            <button
                onClick={handleResend}
                className="px-2 mb-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                RESEND
            </button>
        </div>
    );
};

export default ResendTokenVerify;
