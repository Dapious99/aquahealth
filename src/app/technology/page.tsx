import Image from 'next/image';

export default function Technology() {
  return (
    <div className="overflow-hidden">
      <section className="py-32 bg-brand-900 text-white text-center animate-fade-in-up relative">
        <div className="absolute inset-0 opacity-20"><Image src="/img/hero.jpg" alt="Tech bg" fill className="object-cover mix-blend-luminosity" /></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-white">Azure-backed Computer Vision.</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed">
            Built on enterprise-grade architecture for maximum uptime in the harshest marine environments.
          </p>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl animate-fade-in-up delay-100">
          
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-6 text-brand-900">Convolutional Neural Networks at the Edge</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Traditional cloud computer vision fails in aquaculture because transmitting high-definition video from an offshore pen over cellular networks is prohibitively expensive and slow. AquaHealth solves this by running custom YOLO (You Only Look Once) object detection models directly on the camera node using NVIDIA Jetson Orin Nano modules.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We don't transmit video. We transmit structured telemetry: fish counts, velocity vectors, lesion bounding boxes, and feeding freneticism scores. This reduces bandwidth by 99%.
            </p>
          </div>
          
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200 mb-16 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-brand-900">Microsoft Azure Integration</h3>
            <p className="text-slate-600 mb-6">Our entire backend infrastructure is hosted on Microsoft Azure to ensure compliance and scalability for our enterprise B2B partners.</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-brand-500 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-brand-900">Azure IoT Hub</h4>
                  <p className="text-sm text-slate-600">Handles bi-directional communication to thousands of edge nodes securely.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-brand-500 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-brand-900">Azure Cosmos DB</h4>
                  <p className="text-sm text-slate-600">Provides millisecond latency for the time-series water quality data.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-brand-500 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-brand-900">Azure Cognitive Services</h4>
                  <p className="text-sm text-slate-600">Powers our secondary anomaly detection logic and predictive forecasting models.</p>
                </div>
              </li>
            
              <li className="flex items-start gap-4">
                <div className="mt-1 h-3 w-3 rounded-full bg-brand-500 flex-shrink-0"></div>
                <div>
                  <h4 className="font-bold text-brand-900">AWS S3 & EC2 Data Lakes</h4>
                  <p className="text-sm text-slate-600">For enterprise clients requiring multi-cloud redundancy, our raw telemetry and video diagnostic logs are heavily backed up using AWS infrastructure.</p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </section>
    </div>
  );
}
