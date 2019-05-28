import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render correct link', () => {
     const expectedLink = 'abc';
     const component = shallow(<TripSummary to={`/trip/${expectedLink}`}/>);

     const renderedLink = component.find('.link').text();
     expect(renderedLink).toEqual(expectedLink);
   });

    it('should render correct alt for image', () => {
      const expectedAlt = 'imageAlt';
      const component = shallow(<TripSummary src='Lorem ipsum' alt={expectedAlt} />);

      expect(component.find('.image').prop('alt')).toEqual(expectedAlt);
   });

   it('should render correct src for image', () => {
     const expectedSrc = 'imageSrc';

     const component = shallow(<TripSummary src={expectedSrc} alt='Lorem ipsum' />);

     expect(component.find('.image').prop('src')).toEqual(expectedSrc);
  });

    it('should throw error without id', () => {
      expect(() => shallow(<TripSummary image='Lorem ipsum' name='Lorem ipsum' cost ='Lorem ipsum' days='Lorem ipsum' />)).toThrow();
    });

    it('should throw error without name', () => {
      expect(() => shallow(<TripSummary id='Lorem ipsum' image='Lorem ipsum' cost ='Lorem ipsum' days='Lorem ipsum' />)).toThrow();
    });

    it('should throw error without image', () => {
      expect(() => shallow(<TripSummary id='Lorem ipsum' name='Lorem ipsum' cost ='Lorem ipsum' days='Lorem ipsum' />)).toThrow();
    });

    it('should throw error without cost', () => {
      expect(() => shallow(<TripSummary id='Lorem ipsum' name='Lorem ipsum' image='Lorem ipsum' days='Lorem ipsum' />)).toThrow();
    });

    it('should throw error without days', () => {
      expect(() => shallow(<TripSummary id='Lorem ipsum' name='Lorem ipsum' image='Lorem ipsum' cost='Lorem ipsum' />)).toThrow();
    });

    it('should render correct name, cost, days props', () => {
      const expectedName = 'XYZ';
      const expectedCost = '99';
      const expectedDays = 10;

      const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);

      const renderedName = component.find('.title').text();
      expect(renderedName).toEqual(expectedName);

      const renderedCost = component.find('.cost').text();
      expect(renderedCost).toEqual(expectedCost);

      const renderedDays = component.find('.days').text();
      expect(renderedDays).toEqual(expectedDays);
    });
 });
