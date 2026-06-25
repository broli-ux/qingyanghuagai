const PREFIX = 'vue-cli-dynamic-blog:'

export function getItem(key, fallback = null) {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    return raw ? JSON.parse(raw) : fallback
  } catch (error) {
    console.warn('读取 localStorage 失败：', error)
    return fallback
  }
}

export function setItem(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch (error) {
    console.warn('写入 localStorage 失败：', error)
  }
}

export function incrementMetric(slug, metric) {
  const metrics = getItem('metrics', {})
  const current = metrics[slug] || { views: 0, likes: 0 }
  current[metric] = (current[metric] || 0) + 1
  metrics[slug] = current
  setItem('metrics', metrics)
  return current[metric]
}

export function getMetrics(slug) {
  const metrics = getItem('metrics', {})
  return metrics[slug] || { views: 0, likes: 0 }
}
