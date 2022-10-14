const sentrySanitize = (input: any) => {
  return JSON.parse(
    JSON.stringify(input)
      // For some reasons, Sentry's scrubbers don't like the word "Unauthorized"
      .replace(/auth/gi, 'a*th')
  )
}

export default sentrySanitize
