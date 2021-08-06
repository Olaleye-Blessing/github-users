export const getLanguages = (userRepos) => {
    return userRepos.reduce((acc, current) => {
        let { language, stargazers_count } = current;
        if (!language) return acc;
        if (!acc[language]) {
            acc[language] = {
                label: language,
                value: 1,
                stars: stargazers_count,
            };
        } else {
            acc[language] = {
                ...acc[language],
                value: acc[language].value + 1,
                stars: acc[language].stars + stargazers_count,
            };
        }
        return acc;
    }, {});
};
