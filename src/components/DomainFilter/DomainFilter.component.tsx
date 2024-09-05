import { useEffect, useState } from 'react';
import { threadId } from 'worker_threads';

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

interface Props {
  domains?: string[]
}

const DomainFilter = (props: Props) => {
  const domains = props?.domains ?? [];
  const countries: string[] = [];
  const classifications: string[] = [];
  const subClassifications: string[] = [];
  const s: any = {};

  let [state, setState] = useState<State>({
    countries: [],
    classifications: [],
    subClassifications: []
  });


  useEffect(() => {
    for(let i = 0; i < domains.length; i++) {
      if (countries.indexOf(domains[i].substring(0,2)) < 0) {
        countries.push(domains[i].substring(0,2))
      }
      if (!classifications.includes(domains[i].substring(3,5))) {
        classifications.push(domains[i].substring(3,5));
      }
      if (!subClassifications.includes(domains[i].substring(6))) {
        subClassifications.push(domains[i].substring(6));
      }
    };
    setState({
      countries: countries,
      classifications: classifications,
      subClassifications: subClassifications
    });
  }, [domains]);

  return (<>
    <select name="countries" multiple>
      {state.countries.map(country => (
        <option value={country} key={country}>{country}</option>
      ))}
    </select>
    <select name="classifications" multiple>
      {state.classifications.map(classification => (
        <option value={classification} key={classification}>{classification}</option>
      ))}
    </select>
    <select name="subClassifications" multiple>
      {state.subClassifications.map(subClassification => (
        <option value={subClassification} key={subClassification}>{subClassification}</option>
      ))}
    </select>
  </>);
}

export default DomainFilter
