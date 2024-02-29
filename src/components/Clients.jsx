import React from 'react';
import { clients } from '../constants';

const Clients = () => (
  <section className="flex justify-center my-4">
    <div className="flex flex-wrap w-full">
      {clients.map((client) => (
        <div key={client.id} className="flex-1 flex justify-center sm:min-w-[192px] min-w-[120px]">
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain hover:filter hover:brightness-150 hover:invert-100 cursor-pointer"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
