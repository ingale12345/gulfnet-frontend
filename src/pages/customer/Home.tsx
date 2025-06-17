import { restaurants } from "@/store/restaurants";
import { QRCodeCanvas } from "qrcode.react";
import { Link } from "react-router-dom";

const Home = () => {
  // const baseUrl = window.location.origin;
  const baseUrl = "https://0w5nxmcz-5173.inc1.devtunnels.ms";

  return (
    <div className="flex p-6 w-full flex-col justify-center ">
      <h1 className="text-2xl font-bold mb-4">Sample QR Codes</h1>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-6 ">
        {restaurants.map((r) =>
          r.groups.map((g) =>
            g.tables.map((t) => {
              const url = `${baseUrl}/r/${r.code}/${g.code}/${t}`;
              return (
                <div
                  key={url}
                  className="p-2 flex flex-col justify-center shadow-md items-center gap-2 border rounded-2xl text-center"
                >
                  <QRCodeCanvas value={url} size={96} />
                  <p className="text-xs mt-1">{r.name}</p>
                  <p className="text-xs">
                    {g.name} - Table {t}
                  </p>
                </div>
              );
            })
          )
        )}
      </div>
    </div>
  );
};

export default Home;
