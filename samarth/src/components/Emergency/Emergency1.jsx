import { HeartPulse, Phone, AlertTriangle } from "lucide-react";

const Emergency1 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-br from-gray-100 via-red-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-500">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center text-red-600 dark:text-red-400">
          मेडिकल आपात स्थिति में क्या करें / What to Do During a Medical Emergency
        </h1>

        <div className="bg-white dark:bg-gray-800 border-l-4 border-red-600 rounded-lg shadow-lg p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <HeartPulse className="text-red-600 dark:text-red-400 w-8 h-8" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              चरण 1: शांत रहें / Step 1: Stay Calm
            </h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            शांत रहना बहुत जरूरी है ताकि आप प्रभावी ढंग से कार्य कर सकें। गहरी साँस लें और स्थिति को ध्यान से आंकें।
            Staying calm is critical to ensure you can act effectively during an emergency. Take deep breaths and assess the situation carefully.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border-l-4 border-red-600 rounded-lg shadow-lg p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <Phone className="text-red-600 dark:text-red-400 w-8 h-8" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              चरण 2: आपातकालीन सेवाओं को कॉल करें / Step 2: Call Emergency Services
            </h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            तुरंत अपने स्थानीय आपातकालीन नंबर (जैसे, 112) पर कॉल करें। मरीज की स्थिति, स्थान और अन्य जरूरी जानकारी दें।
            Dial your local emergency number (e.g., 112) immediately. Provide clear information about the patient’s condition, location, and any necessary details.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border-l-4 border-red-600 rounded-lg shadow-lg p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <AlertTriangle className="text-red-600 dark:text-red-400 w-8 h-8" />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              चरण 3: तुरंत देखभाल प्रदान करें / Step 3: Provide Immediate Care
            </h2>
          </div>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            यदि आप प्राथमिक चिकित्सा में प्रशिक्षित हैं, तो चिकित्सा सहायता आने तक सीपीआर या रक्तस्राव नियंत्रित करने जैसे उपाय करें।
            If you are trained in first aid, start performing basic life support or first aid measures such as CPR or controlling bleeding until medical help arrives.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 border-l-4 border-red-600 rounded-lg shadow-lg p-6 space-y-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center">
            उपयोगी सुझाव और जानकारी / Useful Tips and Information
          </h2>
          <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>हमेशा प्राथमिक चिकित्सा किट अपने पास रखें। Keep a first aid kit accessible at all times.</li>
            <li>आपातकालीन नंबर और अपना स्थान जानें। Know your emergency contact numbers and your location.</li>
            <li>मूल प्राथमिक चिकित्सा और सीपीआर तकनीक सीखें। Learn basic first aid and CPR techniques.</li>
            <li>आसपास के अस्पतालों के बारे में जानकारी रखें। Be aware of nearby hospitals and clinics.</li>
          </ul>
        </div>

        <div className="bg-red-600 text-white text-center text-3xl font-bold py-4 rounded-lg shadow-md">
          📞 आपातकालीन नंबर: 112 / Emergency Number: 112
        </div>
      </div>
    </div>
  );
};

export default Emergency1;
