
import React from 'react';

export default function ModernFarming() {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <main>
        {/* Hero Section */}
        <section className="relative bg-white pt-20 pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#65a30d]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-[#eab308]/5 rounded-full blur-3xl"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full text-[#65a30d] font-bold text-sm uppercase tracking-wide mb-6">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                Smart Agriculture
              </div>
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
                Modern Farming with <br/>
                <span className="text-[#65a30d]">Mobile Control</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Integrating IoT sensors, automation, and mobile technology to grow purer, healthier organic produce with zero waste. Experience the intersection of ancient wisdom and futuristic tech.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white max-w-5xl mx-auto">
              <img 
                alt="Smart Farming Dashboard and Fields" 
                className="w-full h-[600px] object-cover" 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=600&fit=crop"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="text-white space-y-2">
                  <div className="flex items-center gap-2 text-[#eab308] mb-1 font-bold uppercase tracking-wider text-xs">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                    Live System Status
                  </div>
                  <h3 className="font-serif font-bold text-3xl md:text-4xl">FarmOS Integration V2.0</h3>
                  <p className="text-gray-300 max-w-lg text-sm md:text-base leading-relaxed">
                    Our proprietary dashboard provides granular insights into every leaf and root. From humidity heatmaps to automated nutrient delivery schedules.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-white border border-white/20 text-center min-w-[110px]">
                    <svg className="w-8 h-8 mx-auto text-[#eab308] mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75z" />
                    </svg>
                    <span className="block font-bold text-2xl">40%</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-300">Water Saved</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-white border border-white/20 text-center min-w-[110px]">
                    <svg className="w-8 h-8 mx-auto text-[#65a30d] mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                    </svg>
                    <span className="block font-bold text-2xl">15%</span>
                    <span className="text-[10px] uppercase tracking-wider text-gray-300">Yield Increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">The Technology Stack</h2>
              <div className="w-24 h-1.5 bg-[#65a30d] mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Our ecosystem comprises four main pillars that work in harmony to maintain perfect growing conditions. We've replaced guesswork with gigabytes of actionable data.
              </p>
            </div>
            
            <div className="space-y-24">
              {/* IoT Sensors */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 relative group">
                  <div className="absolute inset-0 bg-blue-600/10 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-1"></div>
                  <img 
                    alt="IoT Soil Sensor Close up" 
                    className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover border border-gray-100 transition-transform group-hover:-translate-y-1" 
                    src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=400&fit=crop"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-xl border border-gray-200 shadow-lg">
                    <div className="flex justify-between items-center text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                      <span>Sensor Reading #402</span>
                      <span className="text-green-600">Active</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-xs text-gray-500">Moisture</div>
                        <div className="font-bold text-gray-900">42%</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Temp</div>
                        <div className="font-bold text-gray-900">24°C</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">pH</div>
                        <div className="font-bold text-gray-900">6.5</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-lg mb-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                    </svg>
                    <span className="font-bold text-sm uppercase">Data Collection</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">IoT Sensors & Soil Health Analysis</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Our fields are mapped with a network of high-precision IoT sensors buried at root level. These devices act as the "nervous system" of the farm, continuously monitoring critical soil parameters.
                  </p>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    <strong>Real-world Application:</strong> In our tomato cultivation blocks, sensors detected a slight drop in Nitrogen levels before visible signs appeared on leaves. The system automatically adjusted the nutrient mix in the next irrigation cycle, preventing a potential 10% yield loss.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#65a30d] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
                      </svg>
                      <span className="text-gray-700"><strong>Micro-Climate Tracking:</strong> Measures ambient humidity and temperature to predict pest outbreaks.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#65a30d] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
                      </svg>
                      <span className="text-gray-700"><strong>NPK Analysis:</strong> Real-time feedback on Nitrogen, Phosphorus, and Potassium availability.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mobile App Control */}
              <div className="grid grid-cols-1 text-black lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 text-black bg-green-50 px-3 py-1 rounded-lg mb-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                      <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-sm uppercase">Command Center</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">Mobile App Control</h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Farming no longer requires physical presence for every operation. Our custom mobile application puts the entire farm's controls into the farmer's pocket. It provides a dashboard for sensor data, valve status, and historical trends.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
                    <h4 className="font-bold text-gray-900 mb-2">Case Study: The Monsoon Rescue</h4>
                    <p className="text-sm text-gray-600">
                      During an unexpected heavy rainfall at 2 AM, the app alerted our farm manager of rising soil moisture levels. He was able to remotely disable the scheduled morning irrigation immediately, preventing root rot in our delicate spinach crop—all from his bed.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#65a30d] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
                      </svg>
                      <span className="text-gray-700"><strong>Remote Valve Switching:</strong> Toggle irrigation zones on/off instantly from anywhere.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#65a30d] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
                      </svg>
                      <span className="text-gray-700"><strong>Smart Alerts:</strong> Push notifications for critical anomalies like pump failure or low voltage.</span>
                    </li>
                  </ul>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-green-600/10 rounded-3xl transform -rotate-2 transition-transform group-hover:rotate-1"></div>
                  <img 
                    alt="Farmer using mobile app in field" 
                    className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover border border-gray-100" 
                    src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=400&fit=crop"
                  />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 bg-black rounded-[2rem] p-1.5 shadow-2xl border-4 border-gray-800 rotate-3 transition-transform group-hover:rotate-0">
                    <div className="bg-white rounded-[1.7rem] overflow-hidden h-full">
                      <div className="bg-[#65a30d] h-24 p-4 text-white">
                        <div className="text-xs opacity-70 mb-1">Welcome Back</div>
                        <div className="font-bold text-lg">My Farm</div>
                      </div>
                      <div className="p-3 space-y-2">
                        <div className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
                          <div className="text-xs font-bold text-gray-700">Zone A Pump</div>
                          <div className="w-8 h-4 bg-[#65a30d] rounded-full relative">
                            <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow"></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-gray-100 rounded-lg">
                          <div className="text-xs font-bold text-gray-700">Fertilizer Mix</div>
                          <div className="text-xs text-[#65a30d] font-bold">Running</div>
                        </div>
                        <div className="h-20 bg-blue-50 rounded-lg flex items-center justify-center">
                          <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automatic Valves */}
              <div className="grid grid-cols-1 text-black lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 relative group">
                  <div className="absolute inset-0 bg-cyan-600/10 rounded-3xl transform rotate-2 transition-transform group-hover:-rotate-1"></div>
                  <img 
                    alt="Drip irrigation system close up" 
                    className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover border border-gray-100 " 
                    src="https://www.netafimusa.com/cdn-cgi/image/format=auto,fit=crop,quality=80,width=1500/globalassets/usa/s80-valves.jpg?v=492471"
                  />
                  <div className="absolute top-6 left-6 bg-white  p-3 rounded-xl shadow-lg flex items-center gap-3">
                    <div className="bg-cyan-100  p-2 rounded-lg text-cyan-600">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Next Cycle</div>
                      <div className="font-bold text-gray-900 ">06:00 AM</div>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 text-cyan-600 bg-cyan-50  px-3 py-1 rounded-lg mb-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75z" />
                    </svg>
                    <span className="font-bold text-sm uppercase">Precision Irrigation</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900  mb-6">Automatic Valves & Drip Systems</h3>
                  <p className="text-gray-600 text-gray-300 mb-6 text-lg leading-relaxed">
                    Water is our most precious resource. Our automated solenoid valves operate on a rigorous schedule derived from sensor feedback. This ensures "Precision Fertigation"—delivering water and organic liquid nutrients directly to the root zone.
                  </p>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    <strong>Efficiency Gain:</strong> Traditional flood irrigation wastes up to 50% of water due to evaporation and runoff. Our smart valve system reduces this waste to near zero, ensuring 95% water use efficiency.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#65a30d] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
                      </svg>
                      <span className="text-gray-700 "><strong>Zonal Control:</strong> Different crops have different water needs. We manage them independently.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#65a30d] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
                      </svg>
                      <span className="text-gray-700 "><strong>Leak Detection:</strong> The system identifies pressure drops instantly, alerting us to fix lines before water is wasted.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Smart Electrical Panels */}
              <div className="grid grid-cols-1 text-black lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 text-orange-600 bg-orange-50  px-3 py-1 rounded-lg mb-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    <span className="font-bold text-sm uppercase">Power Management</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">Smart Electrical Panels</h3>
                  <p className="text-gray-600  mb-6 text-lg leading-relaxed">
                    Reliable power is the backbone of automated farming. Our custom-designed smart panels protect sensitive equipment from rural grid fluctuations. They include soft-starters for motors, phase preventers, and surge protection.
                  </p>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    <strong>Safety First:</strong> By automating the electrical controls, we remove the need for farm workers to manually operate high-voltage switches in wet field conditions, significantly improving farm safety standards.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#65a30d] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
                      </svg>
                      <span className="text-gray-700 "><strong>Motor Protection:</strong> Auto-shutoff during voltage spikes or dry run conditions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-[#65a30d] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" />
                      </svg>
                      <span className="text-gray-700"><strong>Energy Efficiency:</strong> Optimizes pump operation times to leverage off-peak power availability.</span>
                    </li>
                  </ul>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-orange-600/10 rounded-3xl transform -rotate-3 transition-transform group-hover:rotate-1"></div>
                  <img 
                    alt="Smart Electrical Panel and Circuitry" 
                    className="relative rounded-3xl shadow-xl w-full h-[400px] object-cover border border-gray-100 " 
                    src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=400&fit=crop"
                  />
                  <div className="absolute bottom-6 right-6 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                      <span className="font-bold">Power Load</span>
                    </div>
                    <div className="text-2xl font-bold">12.4 kW</div>
                    <div className="text-xs text-orange-100">Stable • Phase 3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Efficiency Meets Ecology Section */}
        <section className="py-24 bg-white  overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-6">
                  <span className="text-[#eab308] font-bold uppercase tracking-wider text-sm">The Outcome</span>
                  <h2 className="text-4xl font-serif font-bold text-gray-900 mt-2 mb-6">Efficiency Meets Ecology</h2>
                </div>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Traditional farming often relies on guesswork, leading to over-watering or overuse of resources. By implementing mobile control and smart sensors, we remove the guesswork.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  This means the organic vegetables you buy are grown in soil that is chemically balanced naturally, watered precisely to preserve local aquifers, and managed with a lower carbon footprint.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-[#fcfdf7]  border border-gray-100 hover:shadow-md transition-shadow">
                    <svg className="w-10 h-10 text-[#65a30d] mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z" clipRule="evenodd" />
                    </svg>
                    <h4 className="font-bold text-xl text-gray-900 mb-1">Higher Yield</h4>
                    <p className="text-sm text-gray-500">Optimized growth cycles lead to 20-30% more produce per acre.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-[#fcfdf7] border border-gray-100 hover:shadow-md transition-shadow">
                    <svg className="w-10 h-10 text-[#65a30d] mb-3" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
                    </svg>
                    <h4 className="font-bold text-xl text-gray-900 mb-1">Zero Waste</h4>
                    <p className="text-sm text-gray-500">Closed-loop water systems and precise input management.</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 mb-10 lg:mb-0 relative">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#eab308]/10 rounded-full blur-3xl"></div>
                <img 
                  alt="Rich soil close up" 
                  className="relative rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500 border-4 border-white  w-full object-cover h-[500px]" 
                  src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=500&fit=crop"
                />
                <div className="absolute bottom-10 -left-6 bg-white  p-6 rounded-xl shadow-xl max-w-xs border border-gray-100  hidden md:block">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-bold text-gray-500  uppercase tracking-wide">Live Soil Status</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-gray-700 ">Moisture Content</span>
                        <span className="font-bold text-[#65a30d]">Optimal (65%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                        <div className="bg-[#65a30d] h-1.5 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-gray-700">Nitrogen Balance</span>
                        <span className="font-bold text-[#eab308]">Good</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-[#eab308] h-1.5 rounded-full" style={{width: '70%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-gray-700 ">Temp</span>
                        <span className="font-bold text-orange-500">22°C</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 ">
                        <div className="bg-orange-400 h-1.5 rounded-full" style={{width: '50%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#65a30d]">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md">Experience The Future</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mt-6 mb-8 leading-tight">
              Taste the Technology-Driven <br/>Organic Difference
            </h2>
            <p className="text-lime-100 text-lg mb-10 max-w-2xl mx-auto">
              Ready to enjoy produce that is grown with the precision of machines and the care of nature? Visit our shop to order your first box.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a className="bg-white hover:bg-gray-100 text-[#65a30d] px-8 py-4 rounded-full font-bold text-base transition transform hover:-translate-y-1 shadow-xl flex items-center justify-center gap-2" href="#products">
                Shop Fresh Produce 
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </a>
              <a className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-base transition flex items-center justify-center gap-2" href="#contact">
                Contact for Farm Visit
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}