module.exports = {
  CORRECT_EN_US: {
    software: {
      name: 'LanguageTool',
      version: '4.5-SNAPSHOT',
      buildDate: '2019-03-08 21:02',
      apiVersion: 1,
      premium: false,
      premiumHint:
        'You might be missing errors only the Premium version can find. Contact us at support<at>languagetoolplus.com.',
      status: '',
    },
    warnings: { incompleteResults: false },
    language: {
      name: 'English (US)',
      code: 'en-US',
      detectedLanguage: { name: 'English (US)', code: 'en-US', confidence: 0.99 },
    },
    matches: [],
  },
  INCORRECT_EN_US: {
    software: {
      name: 'LanguageTool',
      version: '4.5-SNAPSHOT',
      buildDate: '2019-03-08 21:02',
      apiVersion: 1,
      premium: false,
      premiumHint:
        'You might be missing errors only the Premium version can find. Contact us at support<at>languagetoolplus.com.',
      status: '',
    },
    warnings: {
      incompleteResults: false,
    },
    language: {
      name: 'English (US)',
      code: 'en-US',
      detectedLanguage: {
        name: 'German (Germany)',
        code: 'de-DE',
        confidence: 0.66,
      },
    },
    matches: [
      {
        message: 'Possible spelling mistake found',
        shortMessage: 'Spelling mistake',
        replacements: [
          {
            value: 'bands',
          },
          {
            value: 'hands',
          },
          {
            value: 'lands',
            shortDescription: "plural of 'land'",
          },
          {
            value: 'sands',
          },
          {
            value: 'Danes',
          },
          {
            value: 'dashes',
          },
          {
            value: 'Davids',
          },
          {
            value: 'dandy',
          },
          {
            value: 'wands',
          },
          {
            value: 'dads',
          },
          {
            value: 'dawns',
          },
          {
            value: 'deists',
          },
          {
            value: 'deigns',
          },
          {
            value: 'darns',
          },
          {
            value: 'daunts',
          },
          {
            value: 'damns',
          },
          {
            value: 'dangs',
          },
        ],
        offset: 0,
        length: 6,
        context: {
          text: 'dasnds dasdas sadasd',
          offset: 0,
          length: 6,
        },
        sentence: 'dasnds dasdas sadasd',
        type: {
          typeName: 'Other',
        },
        rule: {
          id: 'MORFOLOGIK_RULE_EN_US',
          description: 'Possible spelling mistake',
          issueType: 'misspelling',
          category: {
            id: 'TYPOS',
            name: 'Possible Typo',
          },
        },
        ignoreForIncompleteSentence: false,
        contextForSureMatch: 0,
      },
      {
        message: 'Possible spelling mistake found',
        shortMessage: 'Spelling mistake',
        replacements: [
          {
            value: 'Dallas',
          },
          {
            value: 'NASDAQ',
          },
          {
            value: 'Dada',
          },
          {
            value: 'dashes',
          },
          {
            value: 'pandas',
          },
          {
            value: 'dads',
          },
          {
            value: 'dachas',
          },
          {
            value: 'deists',
          },
          {
            value: 'pashas',
          },
          {
            value: 'pastas',
          },
          {
            value: 'Adas',
          },
          {
            value: 'Haidas',
          },
        ],
        offset: 7,
        length: 6,
        context: {
          text: 'dasnds dasdas sadasd',
          offset: 7,
          length: 6,
        },
        sentence: 'dasnds dasdas sadasd',
        type: {
          typeName: 'Other',
        },
        rule: {
          id: 'MORFOLOGIK_RULE_EN_US',
          description: 'Possible spelling mistake',
          issueType: 'misspelling',
          category: {
            id: 'TYPOS',
            name: 'Possible Typo',
          },
        },
        ignoreForIncompleteSentence: false,
        contextForSureMatch: 0,
      },
      {
        message: 'Possible spelling mistake found',
        shortMessage: 'Spelling mistake',
        replacements: [
          {
            value: 'salad',
          },
          {
            value: 'sagas',
          },
          {
            value: 'salads',
          },
          {
            value: 'Sadat',
          },
          {
            value: 'sadism',
          },
          {
            value: 'sadist',
          },
          {
            value: 'sodas',
          },
          {
            value: 'Adas',
          },
          {
            value: 'Salas',
          },
          {
            value: 'sades',
          },
        ],
        offset: 14,
        length: 6,
        context: {
          text: 'dasnds dasdas sadasd',
          offset: 14,
          length: 6,
        },
        sentence: 'dasnds dasdas sadasd',
        type: {
          typeName: 'Other',
        },
        rule: {
          id: 'MORFOLOGIK_RULE_EN_US',
          description: 'Possible spelling mistake',
          issueType: 'misspelling',
          category: {
            id: 'TYPOS',
            name: 'Possible Typo',
          },
        },
        ignoreForIncompleteSentence: false,
        contextForSureMatch: 0,
      },
    ],
  },
  MISSING_LANGUAGE_PARAM:
    "Error: Missing 'language' parameter, e.g. 'language=en-US' for American English or 'language=fr' for French",
  PARAMS_NOT_PROVIDED: `Error: Internal Error: Missing 'text' or 'data' parameter`,
};
