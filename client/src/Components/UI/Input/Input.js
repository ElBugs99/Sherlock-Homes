const Input = ({ handleChange, value, title, name, color, isChecked }) => {

    return (
        <div class="dpx">
            <div class='px'>
            </div>
            <div class='py'>
                <label>
                    <input type="radio" class="option-input radio" name="example" onChange={handleChange} value={value} />
                    {title}
                </label>
            </div>
        </div>
    );
};

export default Input;

/* <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label> */

/* <div class="dpx">
                <div class='px'>
                </div>
                <div class='py'>
                    <label>
                        <input type="radio" class="option-input radio" name="example" checked />
                        Radio option
                    </label>
                </div>
            </div> */