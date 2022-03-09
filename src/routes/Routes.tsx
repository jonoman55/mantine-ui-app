import { Routes as Switch, Route } from 'react-router-dom';
import { All, Cards, Codes, Table, Buttons, Chips, TextAndTitle, Alerts, Modals, Inputs, Calendars, TimeInputs } from '../components/demos';

const Routes = () => (
    <Switch>
        <Route path='/' element={<All />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/buttons' element={<Buttons />} />
        <Route path='/code' element={<Codes />} />
        <Route path='/table' element={<Table />} />
        <Route path='/chips' element={<Chips />} />
        <Route path='/text' element={<TextAndTitle />} />
        <Route path='/alerts' element={<Alerts />} />
        <Route path='/modals' element={<Modals />} />
        <Route path='/inputs' element={<Inputs />} />
        <Route path='/calendars' element={<Calendars />} />
        <Route path='/time' element={<TimeInputs />} />
    </Switch>
);

export default Routes;