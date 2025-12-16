/**
 * Hub Styles
 * All styles for Hub folder components
 */

import { StyleSheet } from 'react-native';
import colors from '../common/colors';
import spacing from '../../styles/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  
  // Top Navigation Bar
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.screenPadding || 20,
    paddingVertical: spacing.md,
  },
  topNavIcon: {
    width: 40,
    height: 40,
    borderRadius: spacing.radius.sm,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topNavGreeting: {
    flex: 1,
    marginHorizontal: spacing.md,
    backgroundColor: colors.accent,
    borderRadius: spacing.radius.md,
    padding: spacing.md,
  },
  greetingText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  greetingSubtext: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.6)',
    marginTop: 2,
  },
  topNavMenu: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Search Bar
  searchContainer: {
    paddingHorizontal: spacing.screenPadding || 20,
    paddingBottom: spacing.md,
  },
  
  // Content
  content: {
    flex: 1,
  },
  eventsList: {
    paddingBottom: spacing.xl,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xxl,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  
  // EventCard component styles
  eventCard: {
    backgroundColor: colors.bgCard,
    borderRadius: spacing.radius.md,
    marginHorizontal: spacing.screenPadding || 20,
    marginBottom: spacing.lg,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  eventCardLive: {
    borderColor: colors.success,
    borderWidth: 2,
  },
  eventCardImageContainer: {
    position: 'relative',
  },
  eventCardImage: {
    width: '100%',
    height: 200,
    backgroundColor: colors.bgElevated,
  },
  liveIndicator: {
    position: 'absolute',
    top: spacing.sm,
    left: spacing.sm,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.success,
  },
  eventCardContent: {
    padding: spacing.md,
  },
  eventCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.xs,
  },
  eventCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    flex: 1,
    marginRight: spacing.sm,
  },
  eventCardLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  locationText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: spacing.xs,
  },
  eventCardStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  nowBadge: {
    backgroundColor: colors.success,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: spacing.radius.sm,
    marginRight: spacing.sm,
  },
  nowBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
  genreTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: spacing.sm,
  },
  genreTag: {
    borderWidth: 1,
    borderColor: colors.accent,
    borderRadius: spacing.radius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
  },
  genreTagText: {
    fontSize: 12,
    color: colors.white,
  },
  nowButton: {
    backgroundColor: colors.success,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: spacing.radius.sm,
  },
  nowButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
  },
  
  // Bottom Navigation Bar
  bottomNav: {
    flexDirection: 'row',
    paddingHorizontal: spacing.screenPadding || 20,
    paddingVertical: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.bg,
  },
  bottomNavButton: {
    flex: 1,
    backgroundColor: colors.bgCard,
    borderRadius: spacing.radius.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.xs,
  },
  bottomNavButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.white,
  },
  bottomNavIconButton: {
    width: 50,
    height: 50,
    borderRadius: spacing.radius.md,
    backgroundColor: colors.bgCard,
    borderWidth: 2,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: spacing.xs,
  },
});

export default styles;
