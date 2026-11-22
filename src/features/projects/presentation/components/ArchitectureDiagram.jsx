import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smartphone,
  Layers,
  Server,
  Cloud,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Lock,
  RefreshCw,
  GitBranch,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export function ArchitectureDiagram() {
  const [activeTab, setActiveTab] = useState('app-architecture');

  const tabs = [
    { id: 'app-architecture', label: 'Clean Mobile Architecture', icon: Layers },
    { id: 'api-pipeline', label: 'API Interceptor & Token Flow', icon: RefreshCw },
    { id: 'ci-cd', label: 'Automated Store CI/CD', icon: GitBranch },
  ];

  return (
    <div className="bg-white/95 dark:bg-[#1b182a]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-9 border-2 border-purple-100 dark:border-purple-900/50 shadow-xl shadow-purple-500/5 transition-all">
      
      {/* Diagram Selector Tabs with Modern Linear Gradients */}
      <div className="flex flex-wrap items-center gap-2.5 mb-8 border-b border-gray-200 dark:border-gray-800 pb-5">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-r from-[#6650a4] via-[#7859b8] to-[#258d8b] text-white shadow-md shadow-purple-500/25 scale-[1.02]'
                  : 'bg-gray-100/90 dark:bg-[#252236] text-gray-700 dark:text-gray-300 hover:text-gray-950 dark:hover:text-white border border-gray-200/80 dark:border-gray-700/80 hover:bg-gray-200/80'
              }`}
            >
              <IconComponent className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Fixed-Height Diagram Stage (Prevents any page jump or layout shift) */}
      <div className="min-h-[420px] sm:min-h-[380px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: Clean Mobile Architecture */}
          {activeTab === 'app-architecture' && (
            <motion.div
              key="app-architecture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 flex-1 flex flex-col justify-between"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                
                {/* Layer 1: Presentation */}
                <div className="p-4.5 rounded-2xl bg-[#faf5ff] dark:bg-[#25183d] border-2 border-[#d8b4fe] dark:border-[#7e22ce] flex flex-col items-center shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#6650a4] text-white flex items-center justify-center mb-2.5 shadow-xs">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-sm text-gray-950 dark:text-white mb-0.5">
                    Presentation Layer
                  </h4>
                  <p className="text-[11px] text-gray-700 dark:text-purple-200 font-semibold mb-3">
                    Screens, Atoms & Hooks
                  </p>
                  <div className="w-full space-y-1.5 text-xs font-bold">
                    <div className="bg-white dark:bg-[#181026] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-purple-200 dark:border-purple-800 shadow-2xs">Custom Screens</div>
                    <div className="bg-white dark:bg-[#181026] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-purple-200 dark:border-purple-800 shadow-2xs">Atomic UI Atoms</div>
                    <div className="bg-white dark:bg-[#181026] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-purple-200 dark:border-purple-800 shadow-2xs">Custom Hooks</div>
                  </div>
                </div>

                {/* Layer 2: State & Domain */}
                <div className="p-4.5 rounded-2xl bg-[#eef2ff] dark:bg-[#171a3d] border-2 border-[#a5b4fc] dark:border-[#4338ca] flex flex-col items-center shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#4f46e5] text-white flex items-center justify-center mb-2.5 shadow-xs">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-sm text-gray-950 dark:text-white mb-0.5">
                    State & Domain
                  </h4>
                  <p className="text-[11px] text-gray-700 dark:text-indigo-200 font-semibold mb-3">
                    Redux Toolkit & Use Cases
                  </p>
                  <div className="w-full space-y-1.5 text-xs font-bold">
                    <div className="bg-white dark:bg-[#10122b] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-indigo-200 dark:border-indigo-800 shadow-2xs">Slices & Reducers</div>
                    <div className="bg-white dark:bg-[#10122b] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-indigo-200 dark:border-indigo-800 shadow-2xs">Business Use Cases</div>
                    <div className="bg-white dark:bg-[#10122b] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-indigo-200 dark:border-indigo-800 shadow-2xs">Entity Adapters</div>
                  </div>
                </div>

                {/* Layer 3: Data & Infrastructure */}
                <div className="p-4.5 rounded-2xl bg-[#f0fdfa] dark:bg-[#0f2828] border-2 border-[#5eead4] dark:border-[#0f766e] flex flex-col items-center shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#0d9488] text-white flex items-center justify-center mb-2.5 shadow-xs">
                    <Server className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-sm text-gray-950 dark:text-white mb-0.5">
                    Data & Storage
                  </h4>
                  <p className="text-[11px] text-gray-700 dark:text-teal-200 font-semibold mb-3">
                    Axios, SQLite & AsyncStorage
                  </p>
                  <div className="w-full space-y-1.5 text-xs font-bold">
                    <div className="bg-white dark:bg-[#091a1a] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-teal-200 dark:border-teal-800 shadow-2xs">API Interceptors</div>
                    <div className="bg-white dark:bg-[#091a1a] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-teal-200 dark:border-teal-800 shadow-2xs">Offline Caching</div>
                    <div className="bg-white dark:bg-[#091a1a] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-teal-200 dark:border-teal-800 shadow-2xs">Repositories</div>
                  </div>
                </div>

                {/* Layer 4: Native Modules */}
                <div className="p-4.5 rounded-2xl bg-[#f0fdf4] dark:bg-[#102a1c] border-2 border-[#86efac] dark:border-[#15803d] flex flex-col items-center shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#16a34a] text-white flex items-center justify-center mb-2.5 shadow-xs">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-sm text-gray-950 dark:text-white mb-0.5">
                    Native Modules
                  </h4>
                  <p className="text-[11px] text-gray-700 dark:text-emerald-200 font-semibold mb-3">
                    iOS (Swift) & Android (Kotlin)
                  </p>
                  <div className="w-full space-y-1.5 text-xs font-bold">
                    <div className="bg-white dark:bg-[#0a1b12] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800 shadow-2xs">Camera & QR Scanner</div>
                    <div className="bg-white dark:bg-[#0a1b12] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800 shadow-2xs">FCM Push Listener</div>
                    <div className="bg-white dark:bg-[#0a1b12] text-gray-950 dark:text-gray-100 p-2 rounded-lg border border-emerald-200 dark:border-emerald-800 shadow-2xs">Keychain / Keystore</div>
                  </div>
                </div>

              </div>

              {/* Bottom Stable Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-white to-indigo-50 dark:from-[#211a33] dark:via-[#1a1728] dark:to-[#171c36] text-xs sm:text-sm text-gray-800 dark:text-gray-200 border border-purple-200 dark:border-purple-800/60 flex items-center gap-3 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <p>
                  <strong className="text-gray-950 dark:text-white font-extrabold">Architecture Benefit:</strong> Decoupled Clean Architecture isolates business logic from React rendering, enabling automated testing, rapid UI iteration, and effortless React Native core upgrades.
                </p>
              </div>
            </motion.div>
          )}

          {/* TAB 2: API Interceptor & Token Flow */}
          {activeTab === 'api-pipeline' && (
            <motion.div
              key="api-pipeline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 flex-1 flex flex-col justify-between"
            >
              {/* Pipeline Flowchart */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 p-5 sm:p-6 bg-gradient-to-r from-[#fbfaff] via-[#f7f9fd] to-[#f4f7f6] dark:from-[#171424] dark:via-[#141724] dark:to-[#10191f] rounded-2xl border-2 border-purple-100 dark:border-purple-900/60 shadow-xs">
                
                <div className="p-3.5 bg-white dark:bg-[#1e1c2e] rounded-xl border border-gray-200 dark:border-gray-700 text-center min-w-[130px] shadow-xs">
                  <span className="block font-black text-xs text-gray-950 dark:text-white">User Action</span>
                  <span className="text-[10px] text-gray-600 dark:text-gray-400 font-semibold">QR Scan / Shift Request</span>
                </div>

                <ArrowRight className="w-4 h-4 text-purple-400 rotate-90 md:rotate-0 shrink-0" />

                <div className="p-3.5 bg-white dark:bg-[#1e1c2e] rounded-xl border border-gray-200 dark:border-gray-700 text-center min-w-[140px] shadow-xs">
                  <span className="block font-black text-xs text-gray-950 dark:text-white">Axios Interceptor</span>
                  <span className="text-[10px] text-purple-700 dark:text-purple-300 font-bold">Inject JWT Token</span>
                </div>

                <ArrowRight className="w-4 h-4 text-purple-400 rotate-90 md:rotate-0 shrink-0" />

                <div className="p-3.5 bg-[#faf5ff] dark:bg-[#2b1945] border-2 border-purple-300 dark:border-purple-600 rounded-xl text-center min-w-[140px] shadow-xs">
                  <span className="block font-black text-xs text-purple-950 dark:text-purple-100">401 Detected</span>
                  <span className="text-[10px] text-purple-700 dark:text-purple-300 font-bold">Pause & Queue Calls</span>
                </div>

                <ArrowRight className="w-4 h-4 text-purple-400 rotate-90 md:rotate-0 shrink-0" />

                <div className="p-3.5 bg-[#f0fdfa] dark:bg-[#0c2424] border-2 border-teal-300 dark:border-teal-600 rounded-xl text-center min-w-[140px] shadow-xs">
                  <span className="block font-black text-xs text-teal-950 dark:text-teal-100">Silent Refresh</span>
                  <span className="text-[10px] text-teal-700 dark:text-teal-300 font-bold">Keyring Exchange</span>
                </div>

                <ArrowRight className="w-4 h-4 text-purple-400 rotate-90 md:rotate-0 shrink-0" />

                <div className="p-3.5 bg-[#f0fdf4] dark:bg-[#0d2618] border-2 border-emerald-300 dark:border-emerald-600 rounded-xl text-center min-w-[130px] shadow-xs">
                  <span className="block font-black text-xs text-emerald-950 dark:text-emerald-100">Replay Queue</span>
                  <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold">Zero User Logouts</span>
                </div>

              </div>

              {/* Explanatory Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-[#1e1c2e] border border-gray-200 dark:border-gray-700 shadow-2xs">
                  <h5 className="font-extrabold text-xs text-gray-950 dark:text-white flex items-center gap-2 mb-1.5">
                    <Lock className="w-4 h-4 text-[#6650a4] dark:text-[#c084fc]" />
                    <span>Hardware Keystore Storage</span>
                  </h5>
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    Refresh tokens are never kept in plain AsyncStorage; they are encrypted via iOS Keychain and Android Keystore to satisfy enterprise compliance.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#1e1c2e] border border-gray-200 dark:border-gray-700 shadow-2xs">
                  <h5 className="font-extrabold text-xs text-gray-950 dark:text-white flex items-center gap-2 mb-1.5">
                    <Zap className="w-4 h-4 text-amber-500" />
                    <span>Concurrent Request Mutex</span>
                  </h5>
                  <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    When multiple parallel API calls encounter token expiration simultaneously, only a single refresh request fires; remaining requests wait in memory and replay seamlessly.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: Automated Store CI/CD */}
          {activeTab === 'ci-cd' && (
            <motion.div
              key="ci-cd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-6 flex-1 flex flex-col justify-between"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div className="p-5 rounded-2xl bg-[#faf5ff] dark:bg-[#211636] border-2 border-indigo-200 dark:border-indigo-900 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-300 font-black text-sm">
                      <span className="w-6 h-6 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-xs">1</span>
                      <span>Quality & Test Gates</span>
                    </div>
                    <ul className="text-xs text-gray-800 dark:text-gray-200 font-medium space-y-2 mt-3">
                      <li>• TypeScript strict compilation check</li>
                      <li>• Jest unit test execution across reducers</li>
                      <li>• ESLint & Prettier code standard validation</li>
                      <li>• PR merge gating on GitLab & GitHub</li>
                    </ul>
                  </div>
                  <span className="mt-4 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 bg-white dark:bg-[#161226] p-2 rounded-lg border border-indigo-100 dark:border-indigo-900">
                    Automated on Every PR
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#fff7ed] dark:bg-[#2b1a10] border-2 border-orange-200 dark:border-orange-900 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-orange-700 dark:text-orange-300 font-black text-sm">
                      <span className="w-6 h-6 rounded-lg bg-orange-100 dark:bg-orange-950 flex items-center justify-center text-xs">2</span>
                      <span>Automated Build & Signing</span>
                    </div>
                    <ul className="text-xs text-gray-800 dark:text-gray-200 font-medium space-y-2 mt-3">
                      <li>• Fastlane build scripts for iOS & Android</li>
                      <li>• Keystore signing via secure environment vars</li>
                      <li>• Apple Match provisioning certificate sync</li>
                      <li>• Auto-increment build numbers & tags</li>
                    </ul>
                  </div>
                  <span className="mt-4 text-[10px] font-bold text-orange-600 dark:text-orange-400 bg-white dark:bg-[#20150d] p-2 rounded-lg border border-orange-100 dark:border-orange-900">
                    Release Candidate Artifacts
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#f0fdf4] dark:bg-[#0d2618] border-2 border-emerald-200 dark:border-emerald-900 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-300 font-black text-sm">
                      <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-xs">3</span>
                      <span>Store Deployment & OTA</span>
                    </div>
                    <ul className="text-xs text-gray-800 dark:text-gray-200 font-medium space-y-2 mt-3">
                      <li>• Google Play Console Internal & Production</li>
                      <li>• Apple TestFlight & App Store submission</li>
                      <li>• CodePush / Stallion OTA bundle rollout</li>
                      <li>• Sentry & Crashlytics real-time monitoring</li>
                    </ul>
                  </div>
                  <span className="mt-4 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-white dark:bg-[#0c1f14] p-2 rounded-lg border border-emerald-100 dark:border-emerald-900">
                    Live Production Shipping
                  </span>
                </div>

              </div>

              {/* Bottom Stable Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-purple-50 dark:from-[#0d2417] dark:via-[#1a1728] dark:to-[#211a33] text-xs sm:text-sm text-gray-800 dark:text-gray-200 border border-emerald-200 dark:border-emerald-800/60 flex items-center gap-3 shadow-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <p>
                  <strong className="text-gray-950 dark:text-white font-extrabold">Release Velocity:</strong> High-risk JavaScript hotfixes are rolled out via OTA in minutes, while full native releases undergo automated verification before store reviews.
                </p>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}

export default ArchitectureDiagram;
