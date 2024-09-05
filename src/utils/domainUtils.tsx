export interface DomainLists {
    countries: string[],
    classifications: string[],
    subClassifications: string[]
  }

export const getDomainLists = (domains: string[]): DomainLists => {
    const countries: string[] = [];
    const classifications: string[] = [];
    const subClassifications: string[] = [];

    for (let i = 0; i < domains.length; i++) {
        const domain = domains[i];
        const countryCode = domain.substring(0, 2);
        const classification = domain.substring(3, 5);
        const subClassification = domain.substring(6);

        if (!countries.includes(countryCode)) {
        countries.push(countryCode);
        }

        if (!classifications.includes(classification)) {
        classifications.push(classification);
        }

        if (!subClassifications.includes(subClassification)) {
        subClassifications.push(subClassification);
        }
    }

    return {
        countries,
        classifications,
        subClassifications
    };
    };
