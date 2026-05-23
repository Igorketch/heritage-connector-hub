import { useLanguage } from '@/contexts/LanguageContext';
import { conseilMembers } from '@/data/conseilAdministrationData';
import { useTeamMembers } from '@/hooks/useTeamMembers';
import GenericMemberProfilePage from '@/components/team/GenericMemberProfilePage';

const ConseilMemberProfilePage = () => {
  const { language, t } = useLanguage();
  const { members, hasData } = useTeamMembers('conseil');
  const list = hasData ? members : conseilMembers[language];
  return (
    <GenericMemberProfilePage
      members={list}
      backPath="/team/conseil-administration"
      backLabel={t('team.cat.conseil')}
    />
  );
};

export default ConseilMemberProfilePage;
