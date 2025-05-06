const ResultCard = ({ result, user, onBack }) => (
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-200 flex justify-center items-center p-4 pt-20 z-20">
    <div className="bg-white/80 shadow-2xl rounded-2xl p-8 w-full max-w-md flex flex-col items-center gap-6 backdrop-blur-md">
      <h2 className="text-2xl font-bold text-blue-800">Diagnosis Result</h2>
      <div className="w-full text-left bg-blue-50/80 rounded-xl p-6 shadow-inner flex flex-col gap-2">
        <div className="text-xl font-bold text-blue-900">{user?.name}</div>
        <div className="text-base font-medium text-blue-700"><span className="font-semibold">Email:</span> {user?.email}</div>
        <div className="text-base font-medium text-blue-700"><span className="font-semibold">Country:</span> {user?.country}</div>
      </div>
      {result === 'Positive' && (
        <div className="w-full bg-red-50/80 border-l-4 border-red-400 rounded-xl p-4 mb-2 text-left">
          <h3 className="text-lg font-semibold text-red-700 mb-2">Precautions</h3>
          <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
            <li>Consult a healthcare professional for further evaluation.</li>
            <li>Maintain a balanced diet low in sugar and refined carbs.</li>
            <li>Exercise regularly (at least 30 minutes most days).</li>
            <li>Monitor your blood glucose as advised by your doctor.</li>
            <li>Avoid smoking and limit alcohol consumption.</li>
            <li>Manage stress and get adequate sleep.</li>
          </ul>
        </div>
      )}
      <div className={`w-full text-2xl font-bold text-center py-4 rounded-xl ${result === 'Positive' ? 'bg-red-100/80 text-red-700' : 'bg-green-100/80 text-green-700'}`}
        style={{letterSpacing: '1px'}}>
        {result}
      </div>
      <button
        onClick={onBack}
        className="bg-blue-600 text-white py-2 px-6 rounded-xl font-semibold hover:bg-blue-700 transition mt-2"
      >
        Back to Form
      </button>
    </div>
  </div>
);

export default ResultCard;
