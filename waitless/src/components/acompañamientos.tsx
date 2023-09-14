export function acompañamientos() {
  return(
    <fieldset>
      <div className="h-full w-full p-2">
        <div className="w-full h-full pb-4">
          <p className="text-black pl-2  overflow-hidden inline-flex"> Papa al horno{" "}</p>
          <input type="radio" className="absolute right-0 mr-10 rounded-full accent-black" name="acompañamiento" />
          <hr className="border-b bg-header w-full h-px" />
        </div>

        <div className="w-full h-full pb-4">
          <p className="text-black pl-2 overflow-hidden inline-flex "> Papa frita{" "}</p>
          <input type="radio" className="absolute right-0 mr-10 accent-black" name="acompañamiento" />
          <hr className="border-b bg-header w-full h-px" />
        </div>

        <div className="w-full h-full pb-4">
          <p className="text-black pl-2  overflow-hidden inline-flex "> Ensalada{" "}</p>
          <input type="radio" className="absolute right-0 mr-10 rounded-full accent-black" name="acompañamiento" />
          <hr className="border-b bg-header w-full h-px" />
        </div>
      </div>
    </fieldset>
  );}
