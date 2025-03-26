import React from 'react'

function DetailsDashboardCards({ icon, title, value, bgColor, iconBgColor, description, textColor, profitMargin }) {

  return (
    <div className={`${textColor} px-4 md:pl-8 py-7 space-x-6 rounded-3xl shadow-md flex-col items-between justify-center gap-2 ${bgColor}`}>
      <div className='flex flex-row justify-between gap-2 items-start py-2 '>
        <div className={`rounded-full ${iconBgColor} p-2 flex justify-center items-center`}>
          <span className='text-3xl text-gray-500'>{icon}</span>
        </div>

        <div className={`text-xs xl:text-sm text-black font-bold px-3 py-1 rounded-2xl ${profitMargin < 0 ? 'bg-warning-red' : 'bg-success-green'}`}>
          {profitMargin}
        </div>
      </div>

      <div className='flex flex-col justify-center items-start'>
        <p className='text-md my-4 font-bold'>{title}</p>
        <div className='flex flex-row justify-around items-center gap-5'>
          <p className='font-bold text-xl'>{value}</p>
          <p className='text-sm line-clamp-1'>{description}</p>

        </div>
      </div>
    </div>
  );
}

export default DetailsDashboardCards;
