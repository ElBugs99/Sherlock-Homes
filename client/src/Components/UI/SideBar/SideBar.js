import React, { useState } from "react";
import Input from "../Input/Input";
import "./sideBar.css";

export default function SideBar() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log('value', event.target.value)
  };

  return (
    <div className="side-bar">
      <h2 className="sidebar-title">Categoría</h2>
      <form>
        <Input
          value="Casa"
          title="Casa"
          name="Casa"
          handleChange={handleChange}
        />
        <Input
          value="Departamento"
          title="Departamento"
          name="Departamento"
          handleChange={handleChange}
        />
        <Input
          value="sandals"
          title="Sandals"
          name="sandals"
          handleChange={handleChange}
        />
        <Input
          value="heels"
          title="Heels"
          name="heels"
          handleChange={handleChange}
        />
      </form>

      <h2 className="sidebar-title">Precio</h2>
      <form>
        <Input
          value="Casa"
          title="Casa"
          name="Casa"
          handleChange={handleChange}
        />
        <Input
          value="Departamento"
          title="Departamento"
          name="Departamento"
          handleChange={handleChange}
        />
        <Input
          value="sandals"
          title="Sandals"
          name="sandals"
          handleChange={handleChange}
        />
        <Input
          value="heels"
          title="Heels"
          name="heels"
          handleChange={handleChange}
        />
      </form>

      <h2 className="sidebar-title">habitaciones</h2>
      <form>
        <Input
          value="Casa"
          title="Casa"
          name="Casa"
          handleChange={handleChange}
        />
        <Input
          value="Departamento"
          title="Departamento"
          name="Departamento"
          handleChange={handleChange}
        />
        <Input
          value="sandals"
          title="Sandals"
          name="sandals"
          handleChange={handleChange}
        />
        <Input
          value="heels"
          title="Heels"
          name="heels"
          handleChange={handleChange}
        />
      </form>
    </div>
  );
}