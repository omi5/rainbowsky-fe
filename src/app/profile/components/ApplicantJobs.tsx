// 'use client';

// import Image from 'next/image';
// import { format } from 'date-fns';
// import { IApplication } from '@/app/types/application.type';

// interface Props {
//   applications: IApplication[];
// }

// export function ApplicantJobs({ applications }: Props) {
//   return (
//     <div className='space-y-4'>
//       <h2 className='text-xl font-semibold'>Applications</h2>
//       <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
//         {applications.map((app: any) => (
//           <div
//             key={app._id}
//             className='flex gap-4 rounded-lg border p-4 shadow'
//           >
//             <div className='relative h-24 w-24 overflow-hidden rounded bg-gray-100'>
//               <Image
//                 src={app.job.imageUrl}
//                 alt={app.job.title}
//                 fill
//                 className='object-cover'
//               />
//             </div>
//             <div>
//               <h3 className='text-lg font-bold'>{app.job.title}</h3>
//               <p className='text-sm text-gray-600'>{app.job.companyName}</p>
//               <p className='text-sm'>
//                 Applied: {format(new Date(app.appliedAt), 'PPP')}
//               </p>
//               <span className='mt-2 inline-block rounded bg-blue-100 px-2 py-1 text-blue-800'>
//                 {app.stage}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
