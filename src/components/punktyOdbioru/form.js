import react from "react";
import { FormStyled } from "./formStyled";
import Map from "../googleMapsApi/maps";

class Form extends react.Component{
    constructor(props) {
        super(props);
        this.state = {
          trash: "",
          town: "Łuków",
          showMap: false,
          buttonValue: true,
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleSubmit(e){
        e.preventDefault();
        
        this.setState({
          buttonValue: !this.state.buttonValue,
          showMap: !this.state.showMap,
        });
      }
    
      render() {
        return (
          <>
            <FormStyled onSubmit={this.handleSubmit}>
              <label>
                Leki:
                <input
                  name="trash"
                  type="radio"
                  onChange={this.handleInputChange} 
                  value="leki"
                  />
              </label>
              <br />
              <label>
                Elektro śmieci:
                <input
                  name="trash"
                  type="radio"
                  onChange={this.handleInputChange}
                  value="elektro" />
              </label>
              <br />
              <label>
                <p>Wybierz miasto: </p> 
                <select name="town" value={this.state.town} onChange={this.handleInputChange}>
                  <option value=" Łuków">Łuków</option>
                  <option value=" Warszawa" disabled>Warszawa (W trakcie)</option>
                  <option value=" Kraków" disabled>Kraków (W trakcie)</option>
                  <option value=" Poznań" disabled>Poznań (W trakcie)</option>
              </select>
              </label>
              <br />
              <br />
              <input type="submit" value={this.state.buttonValue ? "Wyszukaj!" : "Ukryj!" }/>
            </FormStyled>
            {this.state.showMap ? <Map trash={this.state.trash} town={this.state.town}/> : null}
          </>
        );
      }
}

export default Form;